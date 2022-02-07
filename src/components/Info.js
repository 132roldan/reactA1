import React from 'react';
import Books from '../components/Books'
import Books2 from '../components/Books2'
import Books3 from '../components/Books3'
import Books4 from '../components/Books4'
import data from '../components/data'
import LookingForSpinoza from '../img/LookingForSpinoza.jpg'

class Info extends React.Component {
  render() {
    // const book = data.map(item => {
    //   return (
    //     <Books

    //     // title={item.title}
    //     />
    //   )

    // })
    return (
      <article>
        <h1>Some Books</h1>
        {/* <p>{book}</p> */}



        <p>Hello, I wanna share some of books that I like.</p>
        <section>
          <Books />
          <Books2 />
          <Books3 />
          <Books4 />
        </section>


      </article>
    )
  }
}

export default Info