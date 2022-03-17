import { Component, OnInit } from '@angular/core';
import { faBuilding, faIndustry, faFileSignature, faMapMarkedAlt, faUserFriends, faInfoCircle, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-description-form',
  templateUrl: './job-description-form.component.html',
  styleUrls: ['./job-description-form.component.css'],
})
export class JobDescriptionFormComponent implements OnInit {
  public readonly faBuilding = faBuilding;
  public readonly faIndustry = faIndustry;
  public readonly faFileSignature = faFileSignature;
  public readonly faMapMarkedAlt = faMapMarkedAlt;
  public readonly faUserFriends = faUserFriends;
  public readonly faInfoCircle = faInfoCircle;
  public readonly faTag = faTag;

  public readonly degrees: { name: string; code: string }[] = [
    { name: 'Engineering', code: 'ENG' },
    { name: 'Masters', code: 'MA' },
    { name: 'PhD', code: 'PHD' },
  ];
  public readonly employmentTypes: { name: string; code: string }[] = [
    { name: 'CDI', code: 'CDI' },
    { name: 'CDD', code: 'CDD' },
    { name: 'SIVP', code: 'SIVP' },
  ];
  public selectedDegree: string;

  constructor() {}

  ngOnInit(): void {}
}
