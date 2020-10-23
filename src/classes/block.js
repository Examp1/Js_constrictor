import {col, row, css,} from '../util';

class Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error('Метод toHTML должен быть реализован');
    }
}

export class TitleBlock extends Block { // extends = наследуем от класса блок
    constructor(value, options){
        super(value, options); //super = инициализация конструктора родителя
    }
    toHtml() {
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class ImageBlock extends Block { 
    constructor(value, options){
        super(value, options); 
    }

    toHtml() {
        const {imageStyles: is, alt = "", styles} = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(this.options.styles));
    }
}

export class ColumnsBlock extends Block { 
    constructor(value, options){
        super(value, options); 
    }

    toHtml() {
        const html = this.value.map(col).join('');
        return row(html, css(this.options.styles));
    }
}

export class TextBlock extends Block { 
    constructor(value, options){
        super(value, options); 
    }
    toHtml() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}