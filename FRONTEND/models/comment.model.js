class Comment {


    constructor(id, author, comment_text, createdAt, updated_at) {
        if (id !== undefined, author !== undefined, comment_text !== undefined, createdAt !== undefined,
             updated_at !== undefined) {

            this.id = id;
            this.author = author;
            this.comment_text = comment_text
            this.createdAt = createdAt;
            this.updated_at = updated_at;

        } else if (author !== undefined, comment_text !== undefined) {

            this.id = null;
            this.author = author;
            this.comment_text = comment_text
            this.createdAt = null;
            this.updated_at = null;
            
        } else {

            this.id = null;
            this.author = null;
            this.comment_text = null;
            this.createdAt = null;
            this.updated_at = null;
        }
    }
    getId() {
        return this.id;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(value) {
        this.author = value;
    }
    getComment() {
        return this.comment_text;
    }
    setComment(value) {
        this.comment_text = value;
    }

    getCreatedAt() {

        return this.createdAt;;

    }

    getUpdatedAt() {
        return this.updated_at;
    }
}
export { Comment }