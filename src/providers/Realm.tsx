import { PropsWithChildren } from "react"
import Realm from "realm"
import { RealmProvider } from "@realm/react";

export default function RealmCustomProvider({children}: PropsWithChildren) {
    return <RealmProvider schema={[]}>{children}</RealmProvider>;
}