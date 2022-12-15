import './App.css';

import empathyAnna from './images/EmpathyMapAnna.png'
import empathyFreddie from './images/EmpathyMapFreddie.png'
import diagram from './images/LockDiagram.png'
import storyboard from './images/Storyboard.png'

function App() {
  return (
    <div className="App">
      <h1>Personas</h1>
      <h2>Using User Models to Understand the Perils of Inefficient Design in Everyday Objects</h2>
      <p> As a result of centuries worth of thought, time, and experimentation, the most common of everyday objects may have the
        most tested and true user designs of any objects. While this does provide a strong base to work from and a clear user
        mental model, some designers take up the challenge to improve upon these time tested designs. Where do these improvements
        facilitate user interaction, and where do they fail to understand the needs of the everyday user? One way to procure an
        answer is to step into the shoes of the everyday user with a user model called a Persona.</p>

      <section>
        <h2>Step 1: Select an Interface</h2>
        <p>User personas should be specific to an interface, and based on information taken from a diverse subset of individuals.
        To this end, I selected a heavily used public interface, in this case, an electronic door lock using a sensor and fob.</p>
        <ul><h3>Interface Goals:</h3>
        <li>Quick, easy access to room</li>
        <li>Tight Security</li>
        <li style= {{paddingLeft: '2rem'}}>Hard to force lock​</li>
        <li style= {{paddingLeft: '2rem'}}>Individual key access</li>
        </ul>
        <ul><h3>Key components:</h3>
        <li>Handle to turn and push</li>
        <li>Plastic fob with sensor</li>
        <li>Sensor pad to detect presence of fob</li>
        <li>Lights to provide sensor activation feedback</li>
        <li>Lock turner</li>
        <li style= {{paddingLeft: '2rem'}}>Can spin freely if un-activated​</li>
        <li style= {{paddingLeft: '2rem'}}>If fob is detected, spinning will push against internal mechanism and unlock door</li>
        <img src={diagram} alt= "A diagram of the lock interface in question"/>
        </ul>
      </section>

      <section>
        <h2>Interview Questions</h2>
        <p>The best way to collect information about a user's experience is to observe them and ask them objective questions to
          understand their reactions.</p>
        <ol>
          <li>Could you describe how you assumed the fob would physically interact with the lock at first glance?</li>
          <li>What was clearly an interactable portion of the mechanism? Were you surprised that any portions were or weren’t interactable?</li>
          <li>What steps did you take to get the door open? How many tries did it take?</li>
          <li>What physical movements felt natural? Did any required movement feel unnatural?</li>
          <li>Did the process of opening feel consistent across multiple tries? Did it get easier/harder?</li>
          <li>What changes to this interface, if any, felt desirable?</li>
          <li>How did the interface give you feedback about the result and possible correctness of your actions?</li>
          <li>Did you notice anything you haven’t gotten to mention yet?</li>
        </ol>
      </section>
        
      <section>
      <h2>Observations and Responses</h2>
        <p>What were our users reactions to the interface? Where and how did they struggle or succeed?</p>
        <br/>
        <h3>Observations</h3>
        <ul>
          <li>Users appeared to be confused by lock turning interactions</li>
          <li style= {{paddingLeft: '2rem'}}>Most users attempted to turn the lock in the incorrect direction,  multiple times, and/or without using the fob first</li>
          <li>Users appeared unclear as to the desired interaction order</li>
          <li style= {{paddingLeft: '2rem'}}>Users attempted to turn the handle before interacting with the lock or fob sensor, or attempted to use the fob and then the handle, skipping the lock</li>
          <li>Users took on average 2 attempts to open the door</li>
        </ul>
        <h3>Responses</h3>
        <ul>
          <li>Users shared a mental model of fobs as scannable objects</li>
          <li>Two users desired to have the lock have limits to its rotation</li>
          <li>No users struggled with the form or intent of the handle, though one struggled with the weight of the door (perhaps a sign of a heavy lock or inefficient handle)</li>
          <li>All users noticed the beep and click response as feedback for the lock opening, but no users noticed the lights</li>
          <li>All users cited the handle and lock as clearly interactable, but none cited the sensor</li>
        </ul>
      </section>

      <section>
        <h2>Empathy Maps</h2>
        <p>Personas are all about empathy. Based on my observations, I can create the concept of a potential user and their feelings and struggles.</p>
        <img src={empathyAnna} alt= "An empathy map wth sticky notes describing aspects of the user Anxious Anna"/>
        <p>Anxious Anna is a college freshman, and her first night in her new room is making her anxious. Anna is a user of our
        interface because she's the resident of this room. This interface is meant to help Anna feel safe, by restricting access
        to the lock and giving her unique personal identification to get in. But because it spins freely, she can't tell if the
        lock was turned the fully or the right way, and she has to keep getting the fob out and going in the hallway to check,
        which is making her more nervous.</p>
        <img src={empathyFreddie} alt= "An empathy map wth sticky notes describing aspects of the user Frantic Freddie"/>
        <p>Flustered Freddie is fresh out of college, and he's about to be late for the first day of his new job. Freddie is a
          user of our interface because he's a resident of the room. The interface is supposed to help him get quick, easy access
          to his room when he needs it, and he will be using it frequently. But because the lock spinning direction isn't well
          defined, and the order of interaction isn't either, Freddie is having trouble getting in and out to grab things, and
          making sure the door is locked behind him.</p>
      </section>

      <section>
        <h2>Storyboard</h2>
        <p>Now that I understand my user persona, I should be able to act them out in a given interaction with the interface.
          A storyboard allows me to visualize the journey my persona would undertake on the way to their goals, and how they might
          react to it.</p>
        <img src={storyboard} alt= "A storyboard mapping out the experience of the user Frantic Freddie"/>
      </section>
    </div>
  );
}

export default App;
