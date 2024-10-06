import { StyleSheet, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "constants/colors";

const ICON_SIZE = 28;

const getIcon = (type: string, iconSize?: number) => {
  switch (type) {
    case "income":
      return {
        icon: <FontAwesome name='money' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.money,
      };
    case "saving":
      return {
        icon: (
          <MaterialCommunityIcons
            name='piggy-bank'
            size={iconSize ?? ICON_SIZE}
            color={colors.white}
          />
        ),
        backgroundColor: colors.saving,
      };
    case "gifts":
      return {
        icon: <FontAwesome5 name='gift' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.gift,
      };
    case "housing":
      return {
        icon: <Ionicons name='home' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.housing,
      };
    case "utilities":
      return {
        icon: (
          <MaterialCommunityIcons
            name='water-pump'
            size={iconSize ?? ICON_SIZE}
            color={colors.white}
          />
        ),
        backgroundColor: colors.utilities,
      };
    case "food":
      return {
        icon: (
          <MaterialCommunityIcons
            name='food-apple'
            size={iconSize ?? ICON_SIZE}
            color={colors.white}
          />
        ),
        backgroundColor: colors.food,
      };
    case "transportation":
      return {
        icon: <FontAwesome5 name='car' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.transportation,
      };
    case "health":
      return {
        icon: (
          <MaterialCommunityIcons name='pill' size={iconSize ?? ICON_SIZE} color={colors.white} />
        ),
        backgroundColor: colors.health,
      };
    case "dailyLiving":
      return {
        icon: (
          <MaterialCommunityIcons
            name='human-greeting'
            size={iconSize ?? ICON_SIZE}
            color={colors.white}
          />
        ),
        backgroundColor: colors.dailyLiving,
      };
    case "children":
      return {
        icon: (
          <MaterialCommunityIcons
            name='baby-carriage'
            size={iconSize ?? ICON_SIZE}
            color={colors.white}
          />
        ),
        backgroundColor: colors.children,
      };
    case "obligation":
      return {
        icon: <FontAwesome5 name='credit-card' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.obligations,
      };
    case "entertainment":
      return {
        icon: <Fontisto name='smiley' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.entertainment,
      };
    case "other":
      return {
        icon: (
          <MaterialIcons name='attach-money' size={iconSize ?? ICON_SIZE} color={colors.white} />
        ),
        backgroundColor: colors.otherCategory,
      };
    case "balanceAdjust":
      return {
        icon: (
          <MaterialCommunityIcons
            name='auto-fix'
            size={iconSize ?? ICON_SIZE}
            color={colors.white}
          />
        ),
        backgroundColor: colors.otherCategory,
      };
    case "transfer":
      return {
        icon: <Fontisto  name='arrow-swap' size={iconSize ?? ICON_SIZE} color={colors.white} />,
        backgroundColor: colors.transfer,
      };
    default:
      return {
        icon: (
          <MaterialIcons name='attach-money' size={iconSize ?? ICON_SIZE} color={colors.white} />
        ),
        backgroundColor: colors.otherCategory,
      };
  }
};

type Props = {
  categoryName: string;
  iconSize?: number;
};

const CategoryIcon: React.FC<Props> = ({ categoryName, iconSize }) => {
  const { icon, backgroundColor } = getIcon(categoryName, iconSize);

  return <View style={[styles.container, { backgroundColor }]}>{icon}</View>;
};

export default CategoryIcon;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    padding: 7,
  },
});
