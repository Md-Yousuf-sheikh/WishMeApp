import React from 'react';
import VectorImage from 'react-native-vector-image';

type TIconProps = typeof VectorImage.defaultProps;

export function PhoneHelpIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/help/call-phone-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function EmailHelpIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/help/message-email.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function TwitterHelpIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/help/twitter-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function WhatsAppHelpIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/help/whats-app-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function FacebookIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/facebook-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function GoogleIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/google-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function AppleIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/apple-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function PlayIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/play-button.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function EmailIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/email-icon.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function EyeCloseIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/eye-close.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function EyeOpenIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/eye-open.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function LockIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/lock-icon.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function SearchIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/search-icon.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ArrowDownIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/arrow-down.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function ArrowUpIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/arrow-up.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function AddIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/add-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function MealIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/meal.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function MealFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/meal-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ExerciseIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/exercise.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function ExerciseFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/exercise-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function CloseIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/close-icon.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function FileUploadIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/file-upload.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ChartIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/chart.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function ChartFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/chart-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function HistoryIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/history.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function HistoryFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/history-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function PhoneIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/phone.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function PhoneFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/phone-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ProfileIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/profile.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function ProfileFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/profile-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ClockIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/clock.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function LbsIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/lbs.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function TrophyIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/trophy.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function NoteIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/note.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function ProfileRound({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/profile-round.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function LockV2({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/lock-v2.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function Bell({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bell.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function Settings({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/settings.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function Sheild({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/sheild.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function Support({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/support.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ChevronRight({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/chevron-right.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function Edit({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/edit.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function WeightLoss({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/weight-loss.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function TotalWorkouts({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/totalworkouts.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
