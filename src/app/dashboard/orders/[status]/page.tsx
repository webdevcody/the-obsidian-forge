"use client";

import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { redirect } from "next/navigation";
import { DateTime } from "luxon";
import { ViewOrderDialog } from "./_components/view-order-dialog";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Doc } from "../../../../../convex/_generated/dataModel";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

type OrderStates = ["new", "inProgress", "readyForPickup", "completed"][number];

export default function DashboardPage({
  params,
}: {
  params: { status: string };
}) {
  if (
    !["new", "inProgress", "readyForPickup", "completed"].includes(
      params.status
    )
  ) {
    return redirect("/dashboard/orders/new");
  }

  const session = useSession();

  useEffect(() => {
    if (!session.isLoaded) return;
    if (
      !session.session ||
      !(session.session.user.publicMetadata as any).isAdmin
    ) {
      return redirect("/");
    }
  }, [session]);

  const status = params.status as OrderStates;

  const { toast } = useToast();

  const setStatusMutation = useMutation(api.orders.setOrderStatus);
  const orders = useQuery(api.orders.getOrders, {
    status,
  });

  const titlesByStatus: Record<OrderStates, string> = {
    new: "New",
    completed: "Completed",
    inProgress: "In Progress",
    readyForPickup: "Ready for Pickup",
  };

  const title = titlesByStatus[status];

  function updateState(repair: Doc<"order">, newState: OrderStates) {
    setStatusMutation({
      orderId: repair._id,
      status: newState,
    });
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm leading-snug text-gray-500 dark:text-gray-400">
          {!orders || orders.length === 0 ? (
            <div>No Orders</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders?.map((order) => {
                  return (
                    <TableRow key={order._id}>
                      <TableCell>
                        <ViewOrderDialog order={order} />
                      </TableCell>
                      <TableCell>
                        <Image
                          className="rounded-xl self-center"
                          src={`/items/${order.itemType}.jpeg`}
                          width="40"
                          height="40"
                          alt={order.itemType}
                        />
                      </TableCell>
                      <TableCell>{order.user.name}</TableCell>
                      <TableCell>{order.user.email}</TableCell>
                      <TableCell>
                        {DateTime.fromMillis(order._creationTime).toFormat(
                          "LLL dd, yyyy hh:MM a"
                        )}
                      </TableCell>
                      <TableCell>
                        {status === "new" && (
                          <Button
                            onClick={() => updateState(order, "inProgress")}
                          >
                            Move to In Progress
                          </Button>
                        )}
                        {status === "inProgress" && (
                          <Button
                            onClick={() => updateState(order, "readyForPickup")}
                          >
                            Set Ready for Pickup
                          </Button>
                        )}
                        {status === "readyForPickup" && (
                          <Button
                            onClick={() => updateState(order, "completed")}
                          >
                            Mark as Completed
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
