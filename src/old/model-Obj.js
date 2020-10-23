import image from './assets/image.png';

export const model = [{
    type: 'title',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
        tag: 'h2',
        // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center`
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }
},
{
    type: 'text',
    value: 'Это текст блок',
    options: {
        styles: {
            background: 'tomato',
        }
    }
},
{
    type: 'columns',
    value: [
        'Колонка 1',
        'Колонка 2',
        'Колонка 3'
    ],
    options: {
        styles: {
            background: 'linear-gradient(to right, tomato, green)',
            color: '#fff',
            padding: '15px'
        }
    }
},
{
    type: 'image',
    value: image,
    options: {
        alt: 'this is img',
        imageStyles: {
            width: '500px',
            height: '200px',
        }
    }
}
];