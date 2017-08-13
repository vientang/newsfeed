import React from 'react';

const MiniPost = () => {
  return (
    <section>
      <header className="major">
        <h2>Mini Post</h2>
      </header>
      <div className="mini-posts">
        <article>
          <a href="#" className="image"><img src="https://placehold.it/288x174" alt="" /></a>
          <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
        </article>
      </div>
      <ul className="actions">
        <li><a href="#" className="button">More</a></li>
      </ul>
    </section>
  );
}

export default MiniPost;
