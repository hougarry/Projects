.contact-form{
    margin: 1.5rem 0;
    input, textarea{
        border-radius: 25px;
        border: none;
        padding: 1rem 1rem;
        font-weight: inherit;
        font-size: inherit;
        font-family: inherit;
        outline: none;
        border: none;
        background-color: var(--color-gray-5);
        color: var(--color-white);
        resize: none;
        width: 100%;
    }
    .submit-btn{
        display: flex;
        justify-content: flex-start;
        &:hover {
            background: var(--color-first);
        }
    }

}
.input-control-line{
    display: flex;
    :last-child{
        margin-left: 2rem;
    }
}



when I change input name part into        <input type="text" id="sendername" name="sendername" required placeholder="Your name">,  when I open my website, it will automatically generate new tab of my website, I don't understand why ,  I only use this id and name inhere , and I didn't add any script for now, 
