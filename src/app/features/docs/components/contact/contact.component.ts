import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  topics: string[] = [
    'foreign currencies',
    'general support',
    'security issues',
    'other'
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      topic: '',
      name: '',
      email: '',
      message: '',
      terms: false,
    });
  }

  onSubmit(): void {
    console.log(this.contactForm);
  }
}
