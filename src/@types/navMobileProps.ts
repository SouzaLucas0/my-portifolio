export interface NavMobileProps {
    data: {
        title: string;
        path: string;   
        icon: ()  => React.ReactElement
    }[];
}