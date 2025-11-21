import { SignOutButton } from "@/components/SignOutButton";
import { useTransactions } from "../../hooks/useTransaction";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();

  const { loadData, deleteTransaction, isLoading, summary, transactions } =
    useTransactions(user?.id || "");

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log("userid", user?.id);

  console.log("transaction is loaded", transactions);
  console.log("summary is loaded", summary);

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
