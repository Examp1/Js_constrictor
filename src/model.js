import image from './assets/image.png';
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/block';
export const model = [
    
    new TitleBlock(
        'Конструктор сайтов на чистом JavaScript', {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    ),

    new TextBlock(
        'Это текст блок', {
            styles: {
                background: 'tomato',
            }
        }
    ),

    new ColumnsBlock(
        [
            'Колонка 1',
            'Колонка 2',
            'Колонка 3'
        ], {
            styles: {
                background: 'linear-gradient(to right, tomato, green)',
                color: '#fff',
                padding: '15px'
            }
        }
    ),

    new ImageBlock(
        image, {
            alt: 'this is img',
            imageStyles: {
                width: '500px',
                height: '200px',
            }
        }
    ),
];