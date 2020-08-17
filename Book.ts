class Book { 
    
    Title:string; 
    Author:string; 
    
    
    constructor(title: string, author: string) { 
       this.Title = title; 
       this.Author = author;
    }  
    
    
    getTitle(): string { 
       return "Title: " + this.Title;
    } 
    getAuthor(): string { 
        return "Author: " + this.Author;
     } 
 } 
 
 
 var PP = new Book("Pride and PrejudiceJane","Austen");
 var H = new Book("Hamlet","William Shakespeare");
 var WP = new Book("War and Peace","Leo Tolstoy");
 