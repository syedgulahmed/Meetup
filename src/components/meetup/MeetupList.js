import classes from "./MeetupList.module.css";

import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            title={meetup.title}
            image={meetup.image}
            content={meetup.content}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
