\*\*\* - TODO -

- TODO: ! Write documentation of button properties
- TODO: should I make an "Accordion" styled input, and how it is going to look ?
- TODO: Strange outline on input
- TODO: ! Somehow check how the icons resolution behaves on IOS and Android
- TODO: Look at how to do a pull request.
- TODO: What is TAG in Accordion ?
- TODO: Should I have hardcoded width on a Button component ????

-TODO: Headers, Misc ????

\*\*\* --- DONE ---

- !!! When you set fullwidth, text is not in the center !!! - DONE
- Apply font to the code !!! - DONE -----
- Make buttons with icons - DONE -----
- Again, look at font and try to figure it out DONE -----
- Fix icons color - DONE ----
- Change all colors to constants - DONE -----
- Make Card variant of a button
- Should iconSource be string or ImageSourcePropType (otherwise, source prop does not take it) -> the icon is a React.ReactNode
- Dinamically insert the icon
- Think of additional styles prop
- can you apply additional styles to the button -> yes, you can
- ! FIGURE OUT THE STYLES FOR ICONS AND INPUT -> DONE
- Input width behaves strangely -> Fixed
- Dynamic styles for label container, because it stretches to full width -> DONE

- Input full width, sizes only for height -> DONE
- How can I check if the styles apply when input is focused -> DONE

---

<!-- ! Thoughts -->

if I make an isIcon prop instead of isArrow, isMoon ... props, it will not work out. But still I need to figure out how to dynamically put Icons

iconSource -> source
no iconSource -> what icon then

--- Alex Q&A ->

- How are you going to use it, to better understand the process of usage
- is normal that I have this much types and conditions -> yes
- Should I have icon by default, or what is the right way to pass the icon -> no, you just pass it as a prop

- what if there are two icons -> then pass two props (RightIcon / LeftIcon as ReactNode)

do not use primary prop for button form, instead use rounded, or smth
icon as React Node (Image)

you have already spreaded the props (for additional styles for example)

Look at Ant design
