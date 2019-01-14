import React from 'react';
import Layout from '../common/layouts';
import Contact from '../contact';


export default () => {
  let message;
  let type;
  if (window) {
    const url = new URL(window.location.href);
    message = url.searchParams.get("message");
    type = url.searchParams.get("type");
  } else {
    message = false;
    type = false;
  }
  return (
    <Layout>
      <Contact message={message} type={type} />
    </Layout>
  )
}
