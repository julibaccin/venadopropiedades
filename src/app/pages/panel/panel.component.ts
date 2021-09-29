import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.profileForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      location: [''],
      phone: ['', [Validators.required]],
      whatsapp: [''],
      urlImg: [''],
    });
  }

  ngOnInit(): void {}

  async handleRefreshProfile() {
    if (this.profileForm.invalid) {
      console.log('FORM REFRESH PROFILE INVALID');
      return;
    }

    await this.auth.createOrUpdateProfile(this.profileForm.value);
  }
}
