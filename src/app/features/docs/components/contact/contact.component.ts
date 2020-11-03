import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      topic: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      message: '',
      terms: false,
    });
  }

  onSubmit(): void {
    console.log(this.contactForm);
  }
}
