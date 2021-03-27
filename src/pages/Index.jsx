import React from 'react';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.REACT_APP_API_URL;


class FetchNews extends React.Component {
  state = {
    loading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      loading: false,
      news: data
    });
    //console.log(this.state.news);
  }

  render() {
    if (this.state.loading) {
      return <div>Sæki gögn...</div>
    }

    return (
      <div>
        {this.state.news.forEach(async (news) => {
          const response = await fetch(news.url);
          const data = await response.json();

          console.log(data.title);

          //this.setState({
          //  group: data.title
          //});
          this.state.groups.push(data.title);
          console.log(this.state.groups);
          
        })}

        {this.state.news.map(news => (
        <p>{news.title}</p>
      ))}   

      </div>
    );

  }
}


export function Index() {
  return (
    <div>
      <h1>RÚV fréttir</h1>

      <FetchNews />

      <p>
        Fréttir frá&nbsp;
          <a href="https://www.ruv.is/">RÚV</a>
      </p>
    </div>
  );
}
