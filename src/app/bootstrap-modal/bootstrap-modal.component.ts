import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'angular-basic-modal/base-modal.component';
import { BaseModalConfig } from 'angular-basic-modal/base-modal-config';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent extends BaseModal implements OnInit {

  constructor(bmc:BaseModalConfig) {
    super(bmc);
  }

  ngOnInit() {
  }

}
