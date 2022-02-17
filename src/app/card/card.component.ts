import { Component, OnInit, Input} from '@angular/core';
import { ArticleCard } from '../article-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data!: ArticleCard
  @Input() colorC = '1'
  constructor() { }

  ngOnInit(): void {
  }

}
