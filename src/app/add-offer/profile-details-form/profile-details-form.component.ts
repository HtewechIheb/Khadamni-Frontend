import { Component, OnInit } from '@angular/core';
import { faVenusMars, faFistRaised, faGraduationCap, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-details-form',
  templateUrl: './profile-details-form.component.html',
  styleUrls: ['./profile-details-form.component.css'],
})
export class ProfileDetailsFormComponent implements OnInit {
  faVenusMars = faVenusMars;
  faFistRaised = faFistRaised;
  faGraduationCap = faGraduationCap;
  faBusinessTime = faBusinessTime;

  skills: string[] = ['Web Development', 'UI/UX'];
  skillInput: string;
  skillsCount = 2;
  readonly maxSkillsCount = 5;

  degrees: { name: string; code: string }[] = [
    { name: 'Engineering', code: 'ENG' },
    { name: 'Masters', code: 'MA' },
    { name: 'PhD', code: 'PHD' },
  ];
  selectedDegree: string;

  constructor() {}

  ngOnInit(): void {}

  addSkill() {
    if (this.skillInput.length > 0) {
      this.skills.push(this.skillInput);
      this.skillsCount++;
      this.skillInput = null;
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
    this.skillsCount--;
  }
}
