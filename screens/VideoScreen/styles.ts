import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoInfoContaier: {
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 10,
  },
  tag: {
    color: "#0094e3",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    fontWeight: "500",
  },

  // Action List
  actionListContainer:{
    marginVertical:10
  },
  actionListItem: {
    width:70,
    height:60,
    justifyContent:'space-around',
    alignItems:'center',
  },
  actionText: {
      color:"white"
  },

  // User 
  avatar:{
    width:50,
    height:50,
    borderRadius:25,
  }
});

export default styles;
