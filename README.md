_- TODO -_

PRIORITY -> TODO: Look at iconOnly property, fix the styles -> added dynamic fz

- !! fw as string
- TODO: make an outline in input search - DONE
- TODO: default button -> more dynamic properties
- TODO: Play button -> icon separate, different backgrounds

  _- DONE -_

- ANDROID Problem with -> Error while updating property 'fontWeight' in shadow node of type: Android TextInput. java.lang.Double cannot be cast to java.lang.String -> Fixed (just removed this property from there)
- Different story inputWithSearch (see screenshot)
- No width in button -> make it stretch to the width of block -> DONE
- What is TAG in Accordion ? -> Ask Alana
- move components folder to the expo project and see how components behave there -> DONE
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
- Strange outline on input -> it can be removed in web version, but check IOS and Android -> DONE
- Look at how to do a pull request. -> DONE

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
