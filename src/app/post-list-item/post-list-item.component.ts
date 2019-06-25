import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;


  onLoveIt(){
    this.loveIts += 1;
  }

  onDontLoveIt(){
    this.loveIts -= 1;
  }

}
