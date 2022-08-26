import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  DataCommentsService,
  CommentType,
} from 'src/app/shared/services/data-comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  activeSortSubcommentBtn: string = 'newest';
  visibleDropdownField: boolean = false;

  comment?: CommentType;

  constructor(public data: DataCommentsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route.params);
    // this.route.params.subscribe((params: Params) => {
    //   let id: number = parseInt(params['id']);
    //   this.comment = this.data.getById(id);
    //   console.log('comment -> :', this.comment);
    // });
  }

  chooseSubcommentSort(str: string): void {
    this.activeSortSubcommentBtn = str;
  }

  showDropdownField(): void {
    this.visibleDropdownField = true;
  }
  hideDropdownField(): void {
    this.visibleDropdownField = false;
  }
}
