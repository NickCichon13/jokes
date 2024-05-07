// import React, { Component } from "react";
// import "./Joke.css";

// /** A single joke, along with vote up/down buttons. */

// class Joke extends Component {
//   render() {
//     const { id, vote, votes, text } = this.props;

//     return (
//       <div className="Joke">
//         <div className="Joke-votearea">
//           <button onClick={evt => vote(id, +1)}>
//             <i className="fas fa-thumbs-up" />
//           </button>

//           <button onClick={evt => vote(id, -1)}>
//             <i className="fas fa-thumbs-down" />
//           </button>

//           {votes}
//         </div>

//         <div className="Joke-text">{text}</div>
//       </div>
//     );
//   }
// }

// export default Joke;



// refacterd code from class component to using function component using Hooks
import React from "react";

function Joke({vote, votes, text, id }) {
  function upVote(evt) { vote(id, +1)}
  function downVote(evt) {vote(id, -1)}

  return (
    <div className="Joke">
      <div className="Joke-votarea">
        <button onClick={upVote}>
          <i className="das fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="das fa-thumbs-down" />
        </button>

        {votes}
      </div>
      <div className="Joke-text">{text}</div>
    </div>
  )
}

export default Joke
