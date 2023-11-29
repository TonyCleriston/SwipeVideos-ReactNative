import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Platform,

  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Video } from "expo-av";
const { height: tamanhoDeTela } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

const FeedItem = ({ data, currentVisibleItem }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  useEffect(() => {
    if(currentVisibleItem === data?.id) {
      videoRef.current.playAsync()
    } else {
      videoRef.current.pauseAsync()
    }
  }, [currentVisibleItem])
  
  const handlePlayer = () => {
    status.isPlaying
      ? videoRef.current?.pauseAsync()
      : videoRef.current.playAsync();
  };
  return (
    <Pressable onPress={handlePlayer}>
      <View style={[styles.info, { bottom: 110 }]}>
        <Text numberOfLines={1} style={styles.name}>
          {data?.name}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
      </View>


      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="heart" size={35} color="#FFF" />
          <Text style={styles.actionText}>30.3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={35} color="#FFF" />
          <Text style={styles.actionText}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>


      <Video
        ref={videoRef}
        style={{ width: "100%", height: tamanhoDeTela }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  actionText: {
    textAlign: "center",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.60)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actions: {
      position: "absolute",
      zIndex: 99,
      flexDirection: "column",
      right:10,
      gap:8,
      bottom: Platform.OS === "android" ? 120 : 170,
  },
  info: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: "rgba(0, 0, 0, 0.60)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  description: {
    color: "#FFF",
    marginRight: 24,
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
});
export default FeedItem;
