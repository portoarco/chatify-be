import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Room_Details
 *
 */
export type Room_DetailsModel = runtime.Types.Result.DefaultSelection<Prisma.$Room_DetailsPayload>;
export type AggregateRoom_Details = {
    _count: Room_DetailsCountAggregateOutputType | null;
    _min: Room_DetailsMinAggregateOutputType | null;
    _max: Room_DetailsMaxAggregateOutputType | null;
};
export type Room_DetailsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    room_id: string | null;
    created_at: Date | null;
};
export type Room_DetailsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    room_id: string | null;
    created_at: Date | null;
};
export type Room_DetailsCountAggregateOutputType = {
    id: number;
    user_id: number;
    room_id: number;
    created_at: number;
    _all: number;
};
export type Room_DetailsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    room_id?: true;
    created_at?: true;
};
export type Room_DetailsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    room_id?: true;
    created_at?: true;
};
export type Room_DetailsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    room_id?: true;
    created_at?: true;
    _all?: true;
};
export type Room_DetailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Room_Details to aggregate.
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Room_Details to fetch.
     */
    orderBy?: Prisma.Room_DetailsOrderByWithRelationInput | Prisma.Room_DetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Room_DetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Room_Details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Room_Details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Room_Details
    **/
    _count?: true | Room_DetailsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Room_DetailsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Room_DetailsMaxAggregateInputType;
};
export type GetRoom_DetailsAggregateType<T extends Room_DetailsAggregateArgs> = {
    [P in keyof T & keyof AggregateRoom_Details]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoom_Details[P]> : Prisma.GetScalarType<T[P], AggregateRoom_Details[P]>;
};
export type Room_DetailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Room_DetailsWhereInput;
    orderBy?: Prisma.Room_DetailsOrderByWithAggregationInput | Prisma.Room_DetailsOrderByWithAggregationInput[];
    by: Prisma.Room_DetailsScalarFieldEnum[] | Prisma.Room_DetailsScalarFieldEnum;
    having?: Prisma.Room_DetailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Room_DetailsCountAggregateInputType | true;
    _min?: Room_DetailsMinAggregateInputType;
    _max?: Room_DetailsMaxAggregateInputType;
};
export type Room_DetailsGroupByOutputType = {
    id: string;
    user_id: string;
    room_id: string;
    created_at: Date;
    _count: Room_DetailsCountAggregateOutputType | null;
    _min: Room_DetailsMinAggregateOutputType | null;
    _max: Room_DetailsMaxAggregateOutputType | null;
};
type GetRoom_DetailsGroupByPayload<T extends Room_DetailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Room_DetailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Room_DetailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Room_DetailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Room_DetailsGroupByOutputType[P]>;
}>>;
export type Room_DetailsWhereInput = {
    AND?: Prisma.Room_DetailsWhereInput | Prisma.Room_DetailsWhereInput[];
    OR?: Prisma.Room_DetailsWhereInput[];
    NOT?: Prisma.Room_DetailsWhereInput | Prisma.Room_DetailsWhereInput[];
    id?: Prisma.StringFilter<"Room_Details"> | string;
    user_id?: Prisma.StringFilter<"Room_Details"> | string;
    room_id?: Prisma.StringFilter<"Room_Details"> | string;
    created_at?: Prisma.DateTimeFilter<"Room_Details"> | Date | string;
    room?: Prisma.XOR<Prisma.RoomsScalarRelationFilter, Prisma.RoomsWhereInput>;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
};
export type Room_DetailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    room?: Prisma.RoomsOrderByWithRelationInput;
    user?: Prisma.UsersOrderByWithRelationInput;
};
export type Room_DetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.Room_DetailsWhereInput | Prisma.Room_DetailsWhereInput[];
    OR?: Prisma.Room_DetailsWhereInput[];
    NOT?: Prisma.Room_DetailsWhereInput | Prisma.Room_DetailsWhereInput[];
    user_id?: Prisma.StringFilter<"Room_Details"> | string;
    room_id?: Prisma.StringFilter<"Room_Details"> | string;
    created_at?: Prisma.DateTimeFilter<"Room_Details"> | Date | string;
    room?: Prisma.XOR<Prisma.RoomsScalarRelationFilter, Prisma.RoomsWhereInput>;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
}, "id">;
export type Room_DetailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.Room_DetailsCountOrderByAggregateInput;
    _max?: Prisma.Room_DetailsMaxOrderByAggregateInput;
    _min?: Prisma.Room_DetailsMinOrderByAggregateInput;
};
export type Room_DetailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Room_DetailsScalarWhereWithAggregatesInput | Prisma.Room_DetailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Room_DetailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Room_DetailsScalarWhereWithAggregatesInput | Prisma.Room_DetailsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Room_Details"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Room_Details"> | string;
    room_id?: Prisma.StringWithAggregatesFilter<"Room_Details"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Room_Details"> | Date | string;
};
export type Room_DetailsCreateInput = {
    id?: string;
    created_at?: Date | string;
    room: Prisma.RoomsCreateNestedOneWithoutRoom_DetailsInput;
    user: Prisma.UsersCreateNestedOneWithoutRoom_detailsInput;
};
export type Room_DetailsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    room_id: string;
    created_at?: Date | string;
};
export type Room_DetailsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    room?: Prisma.RoomsUpdateOneRequiredWithoutRoom_DetailsNestedInput;
    user?: Prisma.UsersUpdateOneRequiredWithoutRoom_detailsNestedInput;
};
export type Room_DetailsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsCreateManyInput = {
    id?: string;
    user_id: string;
    room_id: string;
    created_at?: Date | string;
};
export type Room_DetailsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsListRelationFilter = {
    every?: Prisma.Room_DetailsWhereInput;
    some?: Prisma.Room_DetailsWhereInput;
    none?: Prisma.Room_DetailsWhereInput;
};
export type Room_DetailsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Room_DetailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Room_DetailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Room_DetailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Room_DetailsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutUserInput, Prisma.Room_DetailsUncheckedCreateWithoutUserInput> | Prisma.Room_DetailsCreateWithoutUserInput[] | Prisma.Room_DetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutUserInput | Prisma.Room_DetailsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Room_DetailsCreateManyUserInputEnvelope;
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
};
export type Room_DetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutUserInput, Prisma.Room_DetailsUncheckedCreateWithoutUserInput> | Prisma.Room_DetailsCreateWithoutUserInput[] | Prisma.Room_DetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutUserInput | Prisma.Room_DetailsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Room_DetailsCreateManyUserInputEnvelope;
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
};
export type Room_DetailsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutUserInput, Prisma.Room_DetailsUncheckedCreateWithoutUserInput> | Prisma.Room_DetailsCreateWithoutUserInput[] | Prisma.Room_DetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutUserInput | Prisma.Room_DetailsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Room_DetailsUpsertWithWhereUniqueWithoutUserInput | Prisma.Room_DetailsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Room_DetailsCreateManyUserInputEnvelope;
    set?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    disconnect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    delete?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    update?: Prisma.Room_DetailsUpdateWithWhereUniqueWithoutUserInput | Prisma.Room_DetailsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Room_DetailsUpdateManyWithWhereWithoutUserInput | Prisma.Room_DetailsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Room_DetailsScalarWhereInput | Prisma.Room_DetailsScalarWhereInput[];
};
export type Room_DetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutUserInput, Prisma.Room_DetailsUncheckedCreateWithoutUserInput> | Prisma.Room_DetailsCreateWithoutUserInput[] | Prisma.Room_DetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutUserInput | Prisma.Room_DetailsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Room_DetailsUpsertWithWhereUniqueWithoutUserInput | Prisma.Room_DetailsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Room_DetailsCreateManyUserInputEnvelope;
    set?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    disconnect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    delete?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    update?: Prisma.Room_DetailsUpdateWithWhereUniqueWithoutUserInput | Prisma.Room_DetailsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Room_DetailsUpdateManyWithWhereWithoutUserInput | Prisma.Room_DetailsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Room_DetailsScalarWhereInput | Prisma.Room_DetailsScalarWhereInput[];
};
export type Room_DetailsCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutRoomInput, Prisma.Room_DetailsUncheckedCreateWithoutRoomInput> | Prisma.Room_DetailsCreateWithoutRoomInput[] | Prisma.Room_DetailsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutRoomInput | Prisma.Room_DetailsCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.Room_DetailsCreateManyRoomInputEnvelope;
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
};
export type Room_DetailsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutRoomInput, Prisma.Room_DetailsUncheckedCreateWithoutRoomInput> | Prisma.Room_DetailsCreateWithoutRoomInput[] | Prisma.Room_DetailsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutRoomInput | Prisma.Room_DetailsCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.Room_DetailsCreateManyRoomInputEnvelope;
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
};
export type Room_DetailsUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutRoomInput, Prisma.Room_DetailsUncheckedCreateWithoutRoomInput> | Prisma.Room_DetailsCreateWithoutRoomInput[] | Prisma.Room_DetailsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutRoomInput | Prisma.Room_DetailsCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.Room_DetailsUpsertWithWhereUniqueWithoutRoomInput | Prisma.Room_DetailsUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.Room_DetailsCreateManyRoomInputEnvelope;
    set?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    disconnect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    delete?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    update?: Prisma.Room_DetailsUpdateWithWhereUniqueWithoutRoomInput | Prisma.Room_DetailsUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.Room_DetailsUpdateManyWithWhereWithoutRoomInput | Prisma.Room_DetailsUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.Room_DetailsScalarWhereInput | Prisma.Room_DetailsScalarWhereInput[];
};
export type Room_DetailsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.Room_DetailsCreateWithoutRoomInput, Prisma.Room_DetailsUncheckedCreateWithoutRoomInput> | Prisma.Room_DetailsCreateWithoutRoomInput[] | Prisma.Room_DetailsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.Room_DetailsCreateOrConnectWithoutRoomInput | Prisma.Room_DetailsCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.Room_DetailsUpsertWithWhereUniqueWithoutRoomInput | Prisma.Room_DetailsUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.Room_DetailsCreateManyRoomInputEnvelope;
    set?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    disconnect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    delete?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    connect?: Prisma.Room_DetailsWhereUniqueInput | Prisma.Room_DetailsWhereUniqueInput[];
    update?: Prisma.Room_DetailsUpdateWithWhereUniqueWithoutRoomInput | Prisma.Room_DetailsUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.Room_DetailsUpdateManyWithWhereWithoutRoomInput | Prisma.Room_DetailsUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.Room_DetailsScalarWhereInput | Prisma.Room_DetailsScalarWhereInput[];
};
export type Room_DetailsCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    room: Prisma.RoomsCreateNestedOneWithoutRoom_DetailsInput;
};
export type Room_DetailsUncheckedCreateWithoutUserInput = {
    id?: string;
    room_id: string;
    created_at?: Date | string;
};
export type Room_DetailsCreateOrConnectWithoutUserInput = {
    where: Prisma.Room_DetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Room_DetailsCreateWithoutUserInput, Prisma.Room_DetailsUncheckedCreateWithoutUserInput>;
};
export type Room_DetailsCreateManyUserInputEnvelope = {
    data: Prisma.Room_DetailsCreateManyUserInput | Prisma.Room_DetailsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type Room_DetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.Room_DetailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Room_DetailsUpdateWithoutUserInput, Prisma.Room_DetailsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.Room_DetailsCreateWithoutUserInput, Prisma.Room_DetailsUncheckedCreateWithoutUserInput>;
};
export type Room_DetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.Room_DetailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Room_DetailsUpdateWithoutUserInput, Prisma.Room_DetailsUncheckedUpdateWithoutUserInput>;
};
export type Room_DetailsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.Room_DetailsScalarWhereInput;
    data: Prisma.XOR<Prisma.Room_DetailsUpdateManyMutationInput, Prisma.Room_DetailsUncheckedUpdateManyWithoutUserInput>;
};
export type Room_DetailsScalarWhereInput = {
    AND?: Prisma.Room_DetailsScalarWhereInput | Prisma.Room_DetailsScalarWhereInput[];
    OR?: Prisma.Room_DetailsScalarWhereInput[];
    NOT?: Prisma.Room_DetailsScalarWhereInput | Prisma.Room_DetailsScalarWhereInput[];
    id?: Prisma.StringFilter<"Room_Details"> | string;
    user_id?: Prisma.StringFilter<"Room_Details"> | string;
    room_id?: Prisma.StringFilter<"Room_Details"> | string;
    created_at?: Prisma.DateTimeFilter<"Room_Details"> | Date | string;
};
export type Room_DetailsCreateWithoutRoomInput = {
    id?: string;
    created_at?: Date | string;
    user: Prisma.UsersCreateNestedOneWithoutRoom_detailsInput;
};
export type Room_DetailsUncheckedCreateWithoutRoomInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
};
export type Room_DetailsCreateOrConnectWithoutRoomInput = {
    where: Prisma.Room_DetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Room_DetailsCreateWithoutRoomInput, Prisma.Room_DetailsUncheckedCreateWithoutRoomInput>;
};
export type Room_DetailsCreateManyRoomInputEnvelope = {
    data: Prisma.Room_DetailsCreateManyRoomInput | Prisma.Room_DetailsCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type Room_DetailsUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.Room_DetailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Room_DetailsUpdateWithoutRoomInput, Prisma.Room_DetailsUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.Room_DetailsCreateWithoutRoomInput, Prisma.Room_DetailsUncheckedCreateWithoutRoomInput>;
};
export type Room_DetailsUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.Room_DetailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Room_DetailsUpdateWithoutRoomInput, Prisma.Room_DetailsUncheckedUpdateWithoutRoomInput>;
};
export type Room_DetailsUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.Room_DetailsScalarWhereInput;
    data: Prisma.XOR<Prisma.Room_DetailsUpdateManyMutationInput, Prisma.Room_DetailsUncheckedUpdateManyWithoutRoomInput>;
};
export type Room_DetailsCreateManyUserInput = {
    id?: string;
    room_id: string;
    created_at?: Date | string;
};
export type Room_DetailsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    room?: Prisma.RoomsUpdateOneRequiredWithoutRoom_DetailsNestedInput;
};
export type Room_DetailsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsCreateManyRoomInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
};
export type Room_DetailsUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UsersUpdateOneRequiredWithoutRoom_detailsNestedInput;
};
export type Room_DetailsUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Room_DetailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    room_id?: boolean;
    created_at?: boolean;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room_Details"]>;
export type Room_DetailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    room_id?: boolean;
    created_at?: boolean;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room_Details"]>;
export type Room_DetailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    room_id?: boolean;
    created_at?: boolean;
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room_Details"]>;
export type Room_DetailsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    room_id?: boolean;
    created_at?: boolean;
};
export type Room_DetailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "room_id" | "created_at", ExtArgs["result"]["room_Details"]>;
export type Room_DetailsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type Room_DetailsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type Room_DetailsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    room?: boolean | Prisma.RoomsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
};
export type $Room_DetailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Room_Details";
    objects: {
        room: Prisma.$RoomsPayload<ExtArgs>;
        user: Prisma.$UsersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        room_id: string;
        created_at: Date;
    }, ExtArgs["result"]["room_Details"]>;
    composites: {};
};
export type Room_DetailsGetPayload<S extends boolean | null | undefined | Room_DetailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload, S>;
export type Room_DetailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Room_DetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Room_DetailsCountAggregateInputType | true;
};
export interface Room_DetailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Room_Details'];
        meta: {
            name: 'Room_Details';
        };
    };
    /**
     * Find zero or one Room_Details that matches the filter.
     * @param {Room_DetailsFindUniqueArgs} args - Arguments to find a Room_Details
     * @example
     * // Get one Room_Details
     * const room_Details = await prisma.room_Details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Room_DetailsFindUniqueArgs>(args: Prisma.SelectSubset<T, Room_DetailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Room_Details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Room_DetailsFindUniqueOrThrowArgs} args - Arguments to find a Room_Details
     * @example
     * // Get one Room_Details
     * const room_Details = await prisma.room_Details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Room_DetailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Room_DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Room_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsFindFirstArgs} args - Arguments to find a Room_Details
     * @example
     * // Get one Room_Details
     * const room_Details = await prisma.room_Details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Room_DetailsFindFirstArgs>(args?: Prisma.SelectSubset<T, Room_DetailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Room_Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsFindFirstOrThrowArgs} args - Arguments to find a Room_Details
     * @example
     * // Get one Room_Details
     * const room_Details = await prisma.room_Details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Room_DetailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Room_DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Room_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_Details
     * const room_Details = await prisma.room_Details.findMany()
     *
     * // Get first 10 Room_Details
     * const room_Details = await prisma.room_Details.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const room_DetailsWithIdOnly = await prisma.room_Details.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Room_DetailsFindManyArgs>(args?: Prisma.SelectSubset<T, Room_DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Room_Details.
     * @param {Room_DetailsCreateArgs} args - Arguments to create a Room_Details.
     * @example
     * // Create one Room_Details
     * const Room_Details = await prisma.room_Details.create({
     *   data: {
     *     // ... data to create a Room_Details
     *   }
     * })
     *
     */
    create<T extends Room_DetailsCreateArgs>(args: Prisma.SelectSubset<T, Room_DetailsCreateArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Room_Details.
     * @param {Room_DetailsCreateManyArgs} args - Arguments to create many Room_Details.
     * @example
     * // Create many Room_Details
     * const room_Details = await prisma.room_Details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Room_DetailsCreateManyArgs>(args?: Prisma.SelectSubset<T, Room_DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Room_Details and returns the data saved in the database.
     * @param {Room_DetailsCreateManyAndReturnArgs} args - Arguments to create many Room_Details.
     * @example
     * // Create many Room_Details
     * const room_Details = await prisma.room_Details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Room_Details and only return the `id`
     * const room_DetailsWithIdOnly = await prisma.room_Details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Room_DetailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Room_DetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Room_Details.
     * @param {Room_DetailsDeleteArgs} args - Arguments to delete one Room_Details.
     * @example
     * // Delete one Room_Details
     * const Room_Details = await prisma.room_Details.delete({
     *   where: {
     *     // ... filter to delete one Room_Details
     *   }
     * })
     *
     */
    delete<T extends Room_DetailsDeleteArgs>(args: Prisma.SelectSubset<T, Room_DetailsDeleteArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Room_Details.
     * @param {Room_DetailsUpdateArgs} args - Arguments to update one Room_Details.
     * @example
     * // Update one Room_Details
     * const room_Details = await prisma.room_Details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Room_DetailsUpdateArgs>(args: Prisma.SelectSubset<T, Room_DetailsUpdateArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Room_Details.
     * @param {Room_DetailsDeleteManyArgs} args - Arguments to filter Room_Details to delete.
     * @example
     * // Delete a few Room_Details
     * const { count } = await prisma.room_Details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Room_DetailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Room_DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Room_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_Details
     * const room_Details = await prisma.room_Details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Room_DetailsUpdateManyArgs>(args: Prisma.SelectSubset<T, Room_DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Room_Details and returns the data updated in the database.
     * @param {Room_DetailsUpdateManyAndReturnArgs} args - Arguments to update many Room_Details.
     * @example
     * // Update many Room_Details
     * const room_Details = await prisma.room_Details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Room_Details and only return the `id`
     * const room_DetailsWithIdOnly = await prisma.room_Details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Room_DetailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Room_DetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Room_Details.
     * @param {Room_DetailsUpsertArgs} args - Arguments to update or create a Room_Details.
     * @example
     * // Update or create a Room_Details
     * const room_Details = await prisma.room_Details.upsert({
     *   create: {
     *     // ... data to create a Room_Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_Details we want to update
     *   }
     * })
     */
    upsert<T extends Room_DetailsUpsertArgs>(args: Prisma.SelectSubset<T, Room_DetailsUpsertArgs<ExtArgs>>): Prisma.Prisma__Room_DetailsClient<runtime.Types.Result.GetResult<Prisma.$Room_DetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Room_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsCountArgs} args - Arguments to filter Room_Details to count.
     * @example
     * // Count the number of Room_Details
     * const count = await prisma.room_Details.count({
     *   where: {
     *     // ... the filter for the Room_Details we want to count
     *   }
     * })
    **/
    count<T extends Room_DetailsCountArgs>(args?: Prisma.Subset<T, Room_DetailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Room_DetailsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Room_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Room_DetailsAggregateArgs>(args: Prisma.Subset<T, Room_DetailsAggregateArgs>): Prisma.PrismaPromise<GetRoom_DetailsAggregateType<T>>;
    /**
     * Group by Room_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_DetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Room_DetailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Room_DetailsGroupByArgs['orderBy'];
    } : {
        orderBy?: Room_DetailsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Room_DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_DetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Room_Details model
     */
    readonly fields: Room_DetailsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Room_Details.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Room_DetailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    room<T extends Prisma.RoomsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoomsDefaultArgs<ExtArgs>>): Prisma.Prisma__RoomsClient<runtime.Types.Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Room_Details model
 */
export interface Room_DetailsFieldRefs {
    readonly id: Prisma.FieldRef<"Room_Details", 'String'>;
    readonly user_id: Prisma.FieldRef<"Room_Details", 'String'>;
    readonly room_id: Prisma.FieldRef<"Room_Details", 'String'>;
    readonly created_at: Prisma.FieldRef<"Room_Details", 'DateTime'>;
}
/**
 * Room_Details findUnique
 */
export type Room_DetailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * Filter, which Room_Details to fetch.
     */
    where: Prisma.Room_DetailsWhereUniqueInput;
};
/**
 * Room_Details findUniqueOrThrow
 */
export type Room_DetailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * Filter, which Room_Details to fetch.
     */
    where: Prisma.Room_DetailsWhereUniqueInput;
};
/**
 * Room_Details findFirst
 */
export type Room_DetailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * Filter, which Room_Details to fetch.
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Room_Details to fetch.
     */
    orderBy?: Prisma.Room_DetailsOrderByWithRelationInput | Prisma.Room_DetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Room_Details.
     */
    cursor?: Prisma.Room_DetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Room_Details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Room_Details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Room_Details.
     */
    distinct?: Prisma.Room_DetailsScalarFieldEnum | Prisma.Room_DetailsScalarFieldEnum[];
};
/**
 * Room_Details findFirstOrThrow
 */
export type Room_DetailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * Filter, which Room_Details to fetch.
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Room_Details to fetch.
     */
    orderBy?: Prisma.Room_DetailsOrderByWithRelationInput | Prisma.Room_DetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Room_Details.
     */
    cursor?: Prisma.Room_DetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Room_Details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Room_Details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Room_Details.
     */
    distinct?: Prisma.Room_DetailsScalarFieldEnum | Prisma.Room_DetailsScalarFieldEnum[];
};
/**
 * Room_Details findMany
 */
export type Room_DetailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * Filter, which Room_Details to fetch.
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Room_Details to fetch.
     */
    orderBy?: Prisma.Room_DetailsOrderByWithRelationInput | Prisma.Room_DetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Room_Details.
     */
    cursor?: Prisma.Room_DetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Room_Details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Room_Details.
     */
    skip?: number;
    distinct?: Prisma.Room_DetailsScalarFieldEnum | Prisma.Room_DetailsScalarFieldEnum[];
};
/**
 * Room_Details create
 */
export type Room_DetailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Room_Details.
     */
    data: Prisma.XOR<Prisma.Room_DetailsCreateInput, Prisma.Room_DetailsUncheckedCreateInput>;
};
/**
 * Room_Details createMany
 */
export type Room_DetailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Room_Details.
     */
    data: Prisma.Room_DetailsCreateManyInput | Prisma.Room_DetailsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Room_Details createManyAndReturn
 */
export type Room_DetailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * The data used to create many Room_Details.
     */
    data: Prisma.Room_DetailsCreateManyInput | Prisma.Room_DetailsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Room_Details update
 */
export type Room_DetailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Room_Details.
     */
    data: Prisma.XOR<Prisma.Room_DetailsUpdateInput, Prisma.Room_DetailsUncheckedUpdateInput>;
    /**
     * Choose, which Room_Details to update.
     */
    where: Prisma.Room_DetailsWhereUniqueInput;
};
/**
 * Room_Details updateMany
 */
export type Room_DetailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Room_Details.
     */
    data: Prisma.XOR<Prisma.Room_DetailsUpdateManyMutationInput, Prisma.Room_DetailsUncheckedUpdateManyInput>;
    /**
     * Filter which Room_Details to update
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * Limit how many Room_Details to update.
     */
    limit?: number;
};
/**
 * Room_Details updateManyAndReturn
 */
export type Room_DetailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * The data used to update Room_Details.
     */
    data: Prisma.XOR<Prisma.Room_DetailsUpdateManyMutationInput, Prisma.Room_DetailsUncheckedUpdateManyInput>;
    /**
     * Filter which Room_Details to update
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * Limit how many Room_Details to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Room_Details upsert
 */
export type Room_DetailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Room_Details to update in case it exists.
     */
    where: Prisma.Room_DetailsWhereUniqueInput;
    /**
     * In case the Room_Details found by the `where` argument doesn't exist, create a new Room_Details with this data.
     */
    create: Prisma.XOR<Prisma.Room_DetailsCreateInput, Prisma.Room_DetailsUncheckedCreateInput>;
    /**
     * In case the Room_Details was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Room_DetailsUpdateInput, Prisma.Room_DetailsUncheckedUpdateInput>;
};
/**
 * Room_Details delete
 */
export type Room_DetailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
    /**
     * Filter which Room_Details to delete.
     */
    where: Prisma.Room_DetailsWhereUniqueInput;
};
/**
 * Room_Details deleteMany
 */
export type Room_DetailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Room_Details to delete
     */
    where?: Prisma.Room_DetailsWhereInput;
    /**
     * Limit how many Room_Details to delete.
     */
    limit?: number;
};
/**
 * Room_Details without action
 */
export type Room_DetailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_Details
     */
    select?: Prisma.Room_DetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Room_Details
     */
    omit?: Prisma.Room_DetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Room_DetailsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Room_Details.d.ts.map