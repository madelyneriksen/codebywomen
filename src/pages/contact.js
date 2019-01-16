import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Contact from '../contact';


export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      type: ''
    }
  }

  componentDidMount() {
    try {
      const url = new URL(window.location.href);
      this.setState({message: url.searchParams.get("message")});
      this.setState({type: url.searchParams.get("type")});
    } catch(err) {}
  }
  
  render() {
    return (
      <Layout>
        <Contact
          message={this.state.message}
          type={this.state.type}
          html={this.props.data.markdownRemark.html}
        />
      </Layout>
    )
  }
}


export const query = graphql`
  {
    markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Contact"}}) {
      html
    }
  }
`
