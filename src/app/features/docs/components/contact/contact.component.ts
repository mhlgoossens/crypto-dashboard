import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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

  reserved = ['admin', 'user', 'test'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      topic: [null, Validators.required],
      name: [null, [Validators.required, this.reservedNames.bind(this)]],
      age: [
        null,
        [Validators.min(18), Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(2)],
      ],
      email: [null, [Validators.email, Validators.required]],
      referenceNumber: [null, [Validators.pattern('[0-9]*')]],
      message: [
        null,
        [
          Validators.minLength(20),
          Validators.maxLength(200),
          Validators.required,
        ],
      ],
      terms: [false, Validators.requiredTrue],
      extrasArray: this.fb.array(['test', 'test2']),
    });
  }

  onSubmit(): void {
    console.log(this.contactForm);
  }

  arrayTest(): void {
    console.log('array test clicked');
  }

  reservedNames(control: FormControl): { [s: string]: boolean } {
    if(this.reserved.indexOf(control.value) !== -1) {
      return { reservedName: true}
    }
    // omit return OR return null means: control is valid'
  }

  logForm(): void {
    console.log(this.contactForm);
  }
}
