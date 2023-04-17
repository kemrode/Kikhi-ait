import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootTypes = {
    'Welcome': undefined;
    'Play': undefined;
    'Classment': undefined;
    'Options': undefined;
    'LaunchGame': undefined;
}

export type WelcomeViewProps = NativeStackScreenProps<RootTypes, 'Welcome', 'Welcome'>;
export type ClassementViewProps = NativeStackScreenProps<RootTypes, 'Classment', 'Classment'>;
export type OptionsViewProps = NativeStackScreenProps<RootTypes, 'Options', 'Options'>;

// Game
export type PlayViewProps = NativeStackScreenProps<RootTypes, 'Play', 'Play'>;
export type LaunchGameViewProps = NativeStackScreenProps<RootTypes, 'LaunchGame', 'LaunchGame'>;