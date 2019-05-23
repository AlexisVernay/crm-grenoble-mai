import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  states = StateClient;
  form: FormGroup;
  init = new Client();
  @Output() itemClient: EventEmitter<Client> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [this.init.name],
      email: [this.init.email],
      state: [this.init.state],
    });
  }

  submit() {
    this.itemClient.emit(this.form.value);
  }
}
