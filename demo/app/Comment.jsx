define([
    'jsx/createComponent'
], function (createComponent) {
    return createComponent({
        render: function () {
            return (
                <div className="commentBox">
                    Hello, world! I am a CommentBox.
                </div>
            );
        }
    });
});