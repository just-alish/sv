export const sections = {
  ethos: `
    <h1 style='font-family: Work Sans'>Glass Panel Design.</h1>
    <h3><i>a transparent design you can get behind.</i></h3>

    <p>I always liked the idea of making a UI where all content is split among glass panels.<br><br>I also feel like with all this optimisation, users feel mistreated because no one ever bothers to ask, it's something we just agree to when using our devices. I imagine users seeing a little prompt and making an educated and weighter decision feels empowering and new.<br><br><strong>User trusts interface, interface trusts user, mutual trust breeds efficiency.</strong><br><br>Sure, it's a little cheesy, but it has a philosophy behind it:</p>
    <ul>
      <li>
        <strong>fixed dimensions & clarity:</strong> glass panels cannot expand. They are not Apple's Liquid Glass, they are floating glass panels that move around in 3D space. If a panel is on the screen, it either stay consistent or swipes offscreen. If two panels seem too similar, that means them being split serves little purpose and it's best to either conjoin their function or give them more distinct function.
      </li>
      <li>
        <strong>layer clarity:</strong> if one panel covers another, they must shift sizes for visual clarity.
      </li>
      <li>
        <strong>legibility & blur:</strong> glass panels must withstand any content behind it and still have its content legible, or simply fallback – tinting the panel reduces purity and clarity, so blurring the glass further instead works. The blurriness of glass is directly related to its 'thickness', if you make a panel blurrier, make sure to make it drop a little, temporarily or until no blur is needed.
      </li>
      <li>
        <strong>movement: </strong>something either never moves until the user makes it or moves constantly, in a recognisable pattern.
      </li>
      <li>
        <strong>visual & ux transparency:</strong> the theme is general transparency, not just in looks, but in user experience, too. If anything happens, it must happen on the screen. If that's impractical, use <strong>transparent language</strong>.
      </li>
    </ul>
  `,
  placeholder: `
    <h1 style='font-family: Philosopher'>
      This is written in Philosopher, the font I am not sure works with this design...
    </h1>
    <p>
      Let's just write a lot of bologney, some typical UI designer text nonsense. I'm not like other girls, I don't use Lorem Ipsum.<br><br>In fact, here's my 1,200 word article on why Lorem Ipsum is actually harmful to web design and does not reflect what web content actually looks like because I'm a giiiant fucking nerd. My last blog got... two likes! That's two whole ass people that read the thing (hopefully) and pressed the emotion signal button! Seems pathetic, but imagine saying something and two people walk by and actually signal to you that they liked it. I think we often overlook how big the gesture is. Ohhh, I love the Interwebs.<br><br>Okay, I'm done. Now just copy and paste this crap.
    </p>
  `,
  ethos2: `
  <h2>transparent language & trust:</h2>
    
    <p>it all comes down to trust, if the user's trust is broken, it becomes just another overly controlling UX the user has grown accustomed to.</p>
    <ul>
      <li>
        <strong>no redundant feedback:</strong> if text is to notify that something has happened, it must do just that and only that, saying that 'you clicked this thing and so that other thing happened.' is redundant – if the user clicked something and saw something happen on the screen, they have the cause-and-effect reasoning to be able to realise they are the reason – the user is not stupid, just untrustful, which is only fair.
      </li>
      <li>
        <strong>no surprise info:</strong> following the movement rule, no text must show up unexpected. It's extremely important to present the user with all the information they need to make decisions. If you present additional information after the user has already committed to clicking an element, it not only breaks the trust, it mocks the user's decision.
      </li>
      <li>
        <strong>graceful dead ends:</strong> in case the user hits a wall, they must be given a simple decision prompt, in which making it so that decisions are taken for the user is one of the possible options<br>Think '<br>The file you uploaded surpasses our allowed limit (2000x2000px), but that's okay.<br>Would you like us to downscale it to 2000x2000px on your client?<br>The page might freeze for a moment.<br>[ ] always downscale my files (you can toggle this off in the settings later).<br>[✓] [X]<br>'. Here, I decided against ’The page might freeze for a moment on weaker devices.‘, because it would imply that most, if not all of users' devices are on the weaker side. Type ’The page might freeze for a couple of seconds.‘ and you frustrate those with unlucky connections and weak hardware when it eve tually takes longer than a couple of seconds, breaking the promises they put trust into.
      </li>
    </ul>
    `,
  ethos3: `
  <h2>additional notes</h2>
    
    <ul>
      <li>
        all panels must be interactive, if it's pure content, it may simply have a subtle rotation spring on click.
      </li>
      <li>
        all panel must either be 0.5 rem away or overlap with 3D scaling and blur rules applied.
      </li>
      <li>
        text inputted by the user is etched, therefore must be written from the left (or right for Arabic and Hebrew languages), never centered. Centered inputted text expends outwards, and that's not how writing on material is. Preferably, text field may be a visual recess in the panel rather than an nested panel.
      </li>
      <li>
        panels may only be tinted by their content.
      </li>
      <li>
        autoscroll is prohibited, smooth scroll must be interruptible.
      </li>
    </ul>
    `
};