import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  name: String = "icksingh";
  followers: number = 100000;
  followUser(){
    this.followers++;
  }
}
