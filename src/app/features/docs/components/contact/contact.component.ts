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
    'other',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      topic: [null, Validators.required],
      name: [null, Validators.required],
      age: [null, [Validators.min(18), Validators.required, Validators.pattern('[0-9]*')]],
      email: [null, [Validators.email, Validators.required]],
      referenceNumber: [
        null,
        [Validators.pattern('[0-9]*')],
      ],
      message: [
        null,
        [
          Validators.minLength(20),
          Validators.maxLength(200),
          Validators.required,
        ],
      ],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    console.log(this.contactForm);
  }
}
