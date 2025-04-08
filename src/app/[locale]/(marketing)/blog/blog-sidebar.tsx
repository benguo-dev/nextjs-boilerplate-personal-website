import { setRequestLocale } from 'next-intl/server';

export default async function BlogSidebar(props: { params: { locale: string } }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Blog',
  // });

  return (
    <>
      <div className="sidebar sticky_sidebar max-md:hidden md:flex-[0_0_260px] xl:flex-[0_0_400px]">
        <div className="theiaStickySidebar">
          <div className="widget-item widget_block widget_search">
            <form role="search" method="get" action="\#" className="wp-block-search">
              <div className="flex max-xl:flex-col items-center gap-4 *:border *:border-flasWhite *:dark:border-flasBlack *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack">
                <input className="h-13 grow" placeholder="Input Keyword" type="search" name="search" required={true} />
                <button aria-label="Search" className="h-13 flex-none text-darkGray dark:text-pastelGrey font-semibold py-2.5 px-8 leading-1.75 max-xl:w-full" type="submit">Search</button>
              </div>
            </form>
          </div>
          <div className="widget-item widget_block">
            <ul className="wp-block-latest-posts">
              <li>
                <div className="wp-block-latest-posts__featured-image alignleft">
                  <a href="\#">
                    <img width="150" height="150" src="/assets/blog/dsc20050102_192118_51-1-150x150.jpg" className="wp-post-image" alt="Wind Farm" />
                  </a>
                </div>
                <a className="wp-block-latest-posts__post-title" href="\#">Hello world!</a>
                <div className="wp-block-latest-posts__post-author">by admin</div>
              </li>
              <li>
                <div className="wp-block-latest-posts__featured-image alignleft">
                  <a href="\#">
                    <img width="150" height="150" src="/assets/blog/dsc20050102_192118_51-1-150x150.jpg" className="wp-post-image" alt="Wind Farm" />
                  </a>
                </div>
                <a className="wp-block-latest-posts__post-title" href="\#">WP 6.1 Theme block category</a>
                <div className="wp-block-latest-posts__post-author">by Theme Reviewer</div>
              </li>
            </ul>
          </div>
          <div className="widget-item widget_block widget_recent_comments">
            <h2 className="wp-block-heading">Recent Comments</h2>
            <ol className="has-avatars has-dates has-excerpts wp-block-latest-comments">
              <li className="wp-block-latest-comments__comment">
                <img alt="" src="https://secure.gravatar.com/avatar/deedfa16345e2b0310132d6a713c9664?s=48&d=mm&r=g" className="avatar avatar-48 photo wp-block-latest-comments__comment-avatar" height="48" width="48" />
                <article>
                  <footer className="wp-block-latest-comments__comment-meta">
                    <a className="wp-block-latest-comments__comment-author" href="\#">admin</a>
                    {' '}
                    on
                    <a className="wp-block-latest-comments__comment-link" href="\#">WP 6.1 Theme block category</a>
                    <time dateTime="2025-01-12T12:17:24+00:00" className="wp-block-latest-comments__comment-date">January 12, 2025</time>
                  </footer>
                  <div className="wp-block-latest-comments__comment-excerpt">
                    <p>fsdfdsfdsf</p>
                  </div>
                </article>
              </li>
              <li className="wp-block-latest-comments__comment">
                <img alt="" src="https://secure.gravatar.com/avatar/deedfa16345e2b0310132d6a713c9664?s=48&d=mm&r=g" className="avatar avatar-48 photo wp-block-latest-comments__comment-avatar" height="48" width="48" />
                <article>
                  <footer className="wp-block-latest-comments__comment-meta">
                    <a className="wp-block-latest-comments__comment-author" href="\#">admin</a>
                    {' '}
                    on
                    <a className="wp-block-latest-comments__comment-link" href="\#">Hello world!</a>
                    <time dateTime="2025-01-09T11:42:36+00:00" className="wp-block-latest-comments__comment-date">January 9, 2025</time>
                  </footer>
                  <div className="wp-block-latest-comments__comment-excerpt">
                    <p>Hello world</p>
                  </div>
                </article>
              </li>
              <li className="wp-block-latest-comments__comment">
                <img alt="" src="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=48&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&r=g 2x" className="avatar avatar-48 photo wp-block-latest-comments__comment-avatar" height="48" width="48" />
                <article>
                  <footer className="wp-block-latest-comments__comment-meta">
                    <a className="wp-block-latest-comments__comment-author" href="https://wordpress.org/">A WordPress Commenter</a>
                    {' '}
                    on
                    {' '}
                    <a className="wp-block-latest-comments__comment-link" href="\#">Hello world!</a>
                    <time dateTime="2025-01-09T11:14:08+00:00" className="wp-block-latest-comments__comment-date">January 9, 2025</time>
                  </footer>
                  <div className="wp-block-latest-comments__comment-excerpt">
                    <p>Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in…</p>
                  </div>
                </article>
              </li>
              <li className="wp-block-latest-comments__comment">
                <img alt="" src="https://secure.gravatar.com/avatar/4fdb3b572ac7dd8d7a58ba70317efa14?s=48&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/4fdb3b572ac7dd8d7a58ba70317efa14?s=96&d=mm&r=g 2x" className="avatar avatar-48 photo wp-block-latest-comments__comment-avatar" height="48" width="48" />
                <article>
                  <footer className="wp-block-latest-comments__comment-meta">
                    <a className="wp-block-latest-comments__comment-author" href="https://wpthemetestdata.wordpress.com/">themedemos</a>
                    {' '}
                    on
                    <a className="wp-block-latest-comments__comment-link" href="\#">WP 6.1 Theme block category</a>
                    <time dateTime="2023-01-16T07:17:56+00:00" className="wp-block-latest-comments__comment-date">January 16, 2023</time>
                  </footer>
                  <div className="wp-block-latest-comments__comment-excerpt">
                    <p>This test post needs a comment.</p>
                  </div>
                </article>
              </li>
              <li className="wp-block-latest-comments__comment">
                <img alt="" src="https://secure.gravatar.com/avatar/f72c502e0d657f363b5f2dc79dd8ceea?s=48&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/f72c502e0d657f363b5f2dc79dd8ceea?s=96&d=mm&r=g 2x" className="avatar avatar-48 photo wp-block-latest-comments__comment-avatar" height="48" width="48" />
                <article>
                  <footer className="wp-block-latest-comments__comment-meta">
                    <a className="wp-block-latest-comments__comment-author" href="http://example.org/">John Doe</a>
                    {' '}
                    on
                    <a className="wp-block-latest-comments__comment-link" href="\#">Edge Case: No Content</a>
                    <time dateTime="2013-03-14T12:35:07+00:00" className="wp-block-latest-comments__comment-date">March 14, 2013</time>
                  </footer>
                  <div className="wp-block-latest-comments__comment-excerpt">
                    <p>Having no content in the post should have no adverse effects on the layout or functionality.</p>
                  </div>
                </article>
              </li>
            </ol>
          </div>
          <div className="widget-item widget_block widget_categories">
            <h2 className="wp-block-heading">Categories</h2>
            <ul className="wp-block-categories-list wp-block-categories">
              <li className="cat-item">
                <a href="\#">6.1</a>
                {' '}
                (7)
              </li>
              <li className="cat-item">
                <a href="\#">aciform</a>
                {' '}
                (1)
              </li>
              <li className="cat-item">
                <a href="\#">antiquarianism</a>
                {' '}
                (1)
              </li>
              <li className="cat-item">
                <a href="\#">arrangement</a>
                {' '}
                (1)
              </li>
              <li className="cat-item">
                <a href="\#">asmodeus</a>
                {' '}
                (1)
              </li>
            </ul>
          </div>
          <div className="widget-item widget_block widget_tag_cloud">
            <h2 className="wp-block-heading">Tags</h2>
            <p className="wp-block-tag-cloud">
              <a href="\#" className="tag-cloud-link">8BIT</a>
              <a href="\#" className="tag-cloud-link">alignment</a>
              <a href="\#" className="tag-cloud-link">Articles</a>
              <a href="\#" className="tag-cloud-link">aside</a>
              <a href="\#" className="tag-cloud-link">audio</a>
              <a href="\#" className="tag-cloud-link">captions</a>
              <a href="\#" className="tag-cloud-link">categories</a>
              <a href="\#" className="tag-cloud-link">chat</a>
              <a href="\#" className="tag-cloud-link">Codex</a>
            </p>
          </div>
          {/* <div className="widget-item widget_block widget_calendar">
            <h2 className="wp-block-heading">Calendar</h2>
            <div className="wp-block-calendar">
              <DatePicker />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
