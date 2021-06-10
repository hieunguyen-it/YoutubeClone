import React, { useRef } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
  Platform,
  Pressable,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";
import VideoComments from "../../components/VideoComments";
import VideoComment from "../../components/VideoComment";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

import comments from "../../assets/data/comments.json";

const VideoScreen = () => {
  const CommentsSheetRef = useRef<BottomSheetModal>(null);

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "m";
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "k";
  }

  const openComments = () => {
    CommentsSheetRef.current?.present();
  };
  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      {/* Video Player */}
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
      {/* Video Info */}
      <View style={styles.videoInfoContainer}>
        <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subtitle}>
          {video.user.name} {viewsString} {video.createdAt}
        </Text>
      </View>
      {/* Action List */}
      <View style={styles.actionListContainer}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={styles.actionListContainer}
        >
          <View style={styles.actionListItem}>
            <AntDesign name="like1" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.likes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="dislike2" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="export" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="save" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
        </ScrollView>
      </View>
      {/* User Info */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderColor: "#3d3d3d",
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}
      >
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            {video.user.name}
          </Text>
          <Text style={{ color: "grey", fontSize: 18, fontWeight: "bold" }}>
            {video.user.subcribers}
            subcrible
          </Text>
        </View>
        <Text
          style={{
            color: "red",
            fontSize: 18,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Subcrible
        </Text>
      </View>
      {/* Comments */}
      <Pressable
        onPress={openComments}
        style={{ padding: 10, marginVertical: 10 }}
      >
        <Text style={{ color: "white" }}>Comment 888</Text>
        <VideoComment comment={comments[0]} />
      </Pressable>
      <BottomSheetModal
        ref={CommentsSheetRef}
        snapPoints={["70%"]}
        index={0}
        backgroundComponent={({ style }) => (
          <View style={[style, { backgroundColor: "#4d4d4d" }]} />
        )}
      >
        <VideoComments />
      </BottomSheetModal>
    </View>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#141414",
        flex: 1,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <BottomSheetModalProvider>
        <VideoScreen />
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
