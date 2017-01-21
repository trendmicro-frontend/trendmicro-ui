import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Text
            </h3>
            <div className="typography-example">
                <p>
                    Use &lt;a&gt; tag to show <a href="">hypertext</a>.
                </p>
                <p>
                    <del>Strike a line through text to show that it is deleted.</del>
                </p>
                <p>
                    <mark>Highlight matched items</mark> in a search.
                </p>
                <p>
                    Define an abbreviation using the &lt;<abbr title="Abbreviation">abbr</abbr>&gt; tag.
                </p>
                <p>
                    <strong>Bold your text this way.</strong>
                </p>
            </div>
        </section>
    );
};
