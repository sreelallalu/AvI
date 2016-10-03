import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PreferencesService} from '../../services/preferences.service';
//TODO: import {AuthService} from '../../services/auth.service';
import {LoginPage} from '../loginPage/loginPage';


@Component({
  selector: 'page-settings',
  templateUrl: 'settingsPage.html'
})
export class SettingsPage {
  public preferences:any;
  public PREF_DISCOVERABLE:string;
  public PREF_NOTIFY_MESSAGES:string;
  public PREF_NOTIFY_INVITES:string;

  constructor(public nav: NavController, public preferencesService:PreferencesService,
     //TODO:  public auth:AuthService
    ) {
    this.preferences = {};

    this.PREF_DISCOVERABLE = PreferencesService.PREF_DISCOVERABLE;
    this.PREF_NOTIFY_MESSAGES = PreferencesService.PREF_NOTIFY_MESSAGES;
    this.PREF_NOTIFY_INVITES = PreferencesService.PREF_NOTIFY_INVITES;
  }

  public ionViewWillEnter(){
    this.preferences[PreferencesService.PREF_DISCOVERABLE]
      = this.preferencesService.getPreference(PreferencesService.PREF_DISCOVERABLE);
    this.preferences[PreferencesService.PREF_NOTIFY_MESSAGES]
      = this.preferencesService.getPreference(PreferencesService.PREF_NOTIFY_MESSAGES);
    this.preferences[PreferencesService.PREF_NOTIFY_INVITES]
      = this.preferencesService.getPreference(PreferencesService.PREF_NOTIFY_INVITES);
  }

  public changePreference(event, key){
    this.preferencesService.setPreference(key, event.checked);
  }

  public logout(){
    //TODO: this.auth.logout(() => this.nav.setRoot(LoginPage));
  }
}