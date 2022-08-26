import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCommentsService } from 'src/app/shared/services/data-comments.service';
import { PopupsServiceService } from 'src/app/shared/services/popups-service.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss'],
})
export class BugsComponent implements OnInit, AfterContentChecked {
  sortType: string = 'Top';

  sortTypes: string[] = ['My Own', 'Top', 'New'];
  filterTypes: string[] = [
    'Under Review',
    'Planned',
    'In Progress',
    'Complete',
  ];
  constructor(
    public popupsService: PopupsServiceService,
    public data: DataCommentsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    // console.log(this.route.children.length);
    // if (this.route.children.length !== 0) {
    //   this.data.allCommentsVisible = false;
    // } else {
    //   this.data.allCommentsVisible = true;
    // }
  }

  chooseSortType(item: string): void {
    this.sortType = item;
  }
}
