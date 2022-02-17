import { Component } from '@angular/core';
import { ArticleCard } from './article-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: ArticleCard[] = [
    {
      mainImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Health-food.webp',
      category: 'recipe',
      title: 'Så här gör du en god macka!',
      description: 'Att frukosten är den viktigaste måltiden har blivit ett skämt. Faktum är att en bra frukost sätt en guldkant på vardagen!',
      postDate: '10 Augusti',
      categoryColor: '1'
    },
    {
      mainImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/JS_17_training.jpg',
      category: 'workout',
      title: 'Träna på rätt sätt',
      description: 'Med de här 10 övningarna kommer dina magmuskler bli marvel muskler',
      postDate: '11 augusti',
      categoryColor: '2'
    },
    {
      mainImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Integral_Yoga_Meditation.jpg',
      category: 'mindfullness',
      title: '10 minuter Yoga varje dag förlänger livet',
      description: 'Så här utför du Yoga på rätt sätt',
      postDate: '12 Augusti',
      categoryColor: '3'
    }
  ]
}
