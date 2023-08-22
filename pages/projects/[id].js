import React from "react";


import { getAllPostIds, getPostData } from '../../lib/projects';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
    return (
    <div className="mx-w-1120 flex m-auto">
        <div>{postData.title}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
    )
}
