import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoCard:{

  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9, // Tỷ lệ khung hình
  },
  timeContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  time: {
    color: "white",
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titleRow: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    borderWidth: 5,
  },
  midleContaier: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default styles;
