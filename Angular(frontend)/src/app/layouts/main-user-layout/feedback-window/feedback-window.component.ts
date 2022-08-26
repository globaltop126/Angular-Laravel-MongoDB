import { Component, HostListener, OnInit } from '@angular/core';
import { PopupsServiceService } from 'src/app/shared/services/popups-service.service';

@Component({
  selector: 'app-feedback-window',
  templateUrl: './feedback-window.component.html',
  styleUrls: ['./feedback-window.component.scss'],
})
export class FeedbackWindowComponent implements OnInit {
  constructor(public popupsService: PopupsServiceService) {}

  ngOnInit(): void {}

  @HostListener('window:keydown.escape', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.popupsService.visibleFeedbackWindow = false;
  }
}
