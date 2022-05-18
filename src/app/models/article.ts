export interface Article {
    id: number, 
    title : string,
    content : string,
    author : string,
    createdAt: number,
    deletedAt: number
};

// Mieux de ne pas avoir d'optionnal,
// On définit simplement qu'à la création on a pas d'identifiant
export interface CreateArticle {
    title : string,
    content : string,
    author : string,
    createdAt: number,
    deletedAt: number
};