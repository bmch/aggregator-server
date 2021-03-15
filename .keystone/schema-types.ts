type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type BikeImageRelateToOneInput = {
  readonly create?: BikeImageCreateInput | null;
  readonly connect?: BikeImageWhereUniqueInput | null;
  readonly disconnect?: BikeImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WeightRelateToManyInput = {
  readonly create?: ReadonlyArray<WeightCreateInput | null> | null;
  readonly connect?: ReadonlyArray<WeightWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<WeightWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ReviewRelateToManyInput = {
  readonly create?: ReadonlyArray<ReviewCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ReviewWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ReviewWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BikeWhereInput = {
  readonly AND?: ReadonlyArray<BikeWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BikeWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly launchDate?: Scalars['String'] | null;
  readonly launchDate_not?: Scalars['String'] | null;
  readonly launchDate_lt?: Scalars['String'] | null;
  readonly launchDate_lte?: Scalars['String'] | null;
  readonly launchDate_gt?: Scalars['String'] | null;
  readonly launchDate_gte?: Scalars['String'] | null;
  readonly launchDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly launchDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly score?: Scalars['Int'] | null;
  readonly score_not?: Scalars['Int'] | null;
  readonly score_lt?: Scalars['Int'] | null;
  readonly score_lte?: Scalars['Int'] | null;
  readonly score_gt?: Scalars['Int'] | null;
  readonly score_gte?: Scalars['Int'] | null;
  readonly score_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly score_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly model_year?: Scalars['Int'] | null;
  readonly model_year_not?: Scalars['Int'] | null;
  readonly model_year_lt?: Scalars['Int'] | null;
  readonly model_year_lte?: Scalars['Int'] | null;
  readonly model_year_gt?: Scalars['Int'] | null;
  readonly model_year_gte?: Scalars['Int'] | null;
  readonly model_year_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly model_year_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly drive_train_type?: Scalars['String'] | null;
  readonly drive_train_type_not?: Scalars['String'] | null;
  readonly drive_train_type_contains?: Scalars['String'] | null;
  readonly drive_train_type_not_contains?: Scalars['String'] | null;
  readonly drive_train_type_starts_with?: Scalars['String'] | null;
  readonly drive_train_type_not_starts_with?: Scalars['String'] | null;
  readonly drive_train_type_ends_with?: Scalars['String'] | null;
  readonly drive_train_type_not_ends_with?: Scalars['String'] | null;
  readonly drive_train_type_i?: Scalars['String'] | null;
  readonly drive_train_type_not_i?: Scalars['String'] | null;
  readonly drive_train_type_contains_i?: Scalars['String'] | null;
  readonly drive_train_type_not_contains_i?: Scalars['String'] | null;
  readonly drive_train_type_starts_with_i?: Scalars['String'] | null;
  readonly drive_train_type_not_starts_with_i?: Scalars['String'] | null;
  readonly drive_train_type_ends_with_i?: Scalars['String'] | null;
  readonly drive_train_type_not_ends_with_i?: Scalars['String'] | null;
  readonly drive_train_type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly drive_train_type_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly includes_powermeter?: Scalars['Boolean'] | null;
  readonly includes_powermeter_not?: Scalars['Boolean'] | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: BikeImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly weight_every?: WeightWhereInput | null;
  readonly weight_some?: WeightWhereInput | null;
  readonly weight_none?: WeightWhereInput | null;
  readonly review_every?: ReviewWhereInput | null;
  readonly review_some?: ReviewWhereInput | null;
  readonly review_none?: ReviewWhereInput | null;
  readonly brakeType?: Scalars['String'] | null;
  readonly brakeType_not?: Scalars['String'] | null;
  readonly brakeType_contains?: Scalars['String'] | null;
  readonly brakeType_not_contains?: Scalars['String'] | null;
  readonly brakeType_starts_with?: Scalars['String'] | null;
  readonly brakeType_not_starts_with?: Scalars['String'] | null;
  readonly brakeType_ends_with?: Scalars['String'] | null;
  readonly brakeType_not_ends_with?: Scalars['String'] | null;
  readonly brakeType_i?: Scalars['String'] | null;
  readonly brakeType_not_i?: Scalars['String'] | null;
  readonly brakeType_contains_i?: Scalars['String'] | null;
  readonly brakeType_not_contains_i?: Scalars['String'] | null;
  readonly brakeType_starts_with_i?: Scalars['String'] | null;
  readonly brakeType_not_starts_with_i?: Scalars['String'] | null;
  readonly brakeType_ends_with_i?: Scalars['String'] | null;
  readonly brakeType_not_ends_with_i?: Scalars['String'] | null;
  readonly brakeType_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly brakeType_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type BikeWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBikesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'launchDate_ASC'
  | 'launchDate_DESC'
  | 'score_ASC'
  | 'score_DESC'
  | 'model_year_ASC'
  | 'model_year_DESC'
  | 'drive_train_type_ASC'
  | 'drive_train_type_DESC'
  | 'includes_powermeter_ASC'
  | 'includes_powermeter_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'weight_ASC'
  | 'weight_DESC'
  | 'review_ASC'
  | 'review_DESC'
  | 'brakeType_ASC'
  | 'brakeType_DESC'
  | 'price_ASC'
  | 'price_DESC';

export type BikeUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly launchDate?: Scalars['String'] | null;
  readonly score?: Scalars['Int'] | null;
  readonly model_year?: Scalars['Int'] | null;
  readonly drive_train_type?: Scalars['String'] | null;
  readonly includes_powermeter?: Scalars['Boolean'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: BikeImageRelateToOneInput | null;
  readonly weight?: WeightRelateToManyInput | null;
  readonly review?: ReviewRelateToManyInput | null;
  readonly brakeType?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type BikesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BikeUpdateInput | null;
};

export type BikeCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly launchDate?: Scalars['String'] | null;
  readonly score?: Scalars['Int'] | null;
  readonly model_year?: Scalars['Int'] | null;
  readonly drive_train_type?: Scalars['String'] | null;
  readonly includes_powermeter?: Scalars['Boolean'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: BikeImageRelateToOneInput | null;
  readonly weight?: WeightRelateToManyInput | null;
  readonly review?: ReviewRelateToManyInput | null;
  readonly brakeType?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type BikesCreateInput = {
  readonly data?: BikeCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type BikeRelateToOneInput = {
  readonly create?: BikeCreateInput | null;
  readonly connect?: BikeWhereUniqueInput | null;
  readonly disconnect?: BikeWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BikeImageWhereInput = {
  readonly AND?: ReadonlyArray<BikeImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BikeImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly bike?: BikeWhereInput | null;
  readonly bike_is_null?: Scalars['Boolean'] | null;
};

export type BikeImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBikeImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'bike_ASC'
  | 'bike_DESC';

export type BikeImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly bike?: BikeRelateToOneInput | null;
};

export type BikeImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BikeImageUpdateInput | null;
};

export type BikeImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly bike?: BikeRelateToOneInput | null;
};

export type BikeImagesCreateInput = {
  readonly data?: BikeImageCreateInput | null;
};

export type PublicationImageRelateToOneInput = {
  readonly create?: PublicationImageCreateInput | null;
  readonly connect?: PublicationImageWhereUniqueInput | null;
  readonly disconnect?: PublicationImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PublicationWhereInput = {
  readonly AND?: ReadonlyArray<PublicationWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PublicationWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: PublicationImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly review_every?: ReviewWhereInput | null;
  readonly review_some?: ReviewWhereInput | null;
  readonly review_none?: ReviewWhereInput | null;
};

export type PublicationWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPublicationsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'review_ASC'
  | 'review_DESC';

export type PublicationUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly photo?: PublicationImageRelateToOneInput | null;
  readonly review?: ReviewRelateToManyInput | null;
};

export type PublicationsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PublicationUpdateInput | null;
};

export type PublicationCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly photo?: PublicationImageRelateToOneInput | null;
  readonly review?: ReviewRelateToManyInput | null;
};

export type PublicationsCreateInput = {
  readonly data?: PublicationCreateInput | null;
};

export type PublicationRelateToOneInput = {
  readonly create?: PublicationCreateInput | null;
  readonly connect?: PublicationWhereUniqueInput | null;
  readonly disconnect?: PublicationWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PublicationImageWhereInput = {
  readonly AND?: ReadonlyArray<PublicationImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PublicationImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly publication?: PublicationWhereInput | null;
  readonly publication_is_null?: Scalars['Boolean'] | null;
};

export type PublicationImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPublicationImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'publication_ASC'
  | 'publication_DESC';

export type PublicationImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly publication?: PublicationRelateToOneInput | null;
};

export type PublicationImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PublicationImageUpdateInput | null;
};

export type PublicationImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly publication?: PublicationRelateToOneInput | null;
};

export type PublicationImagesCreateInput = {
  readonly data?: PublicationImageCreateInput | null;
};

export type ReviewRelateToOneInput = {
  readonly create?: ReviewCreateInput | null;
  readonly connect?: ReviewWhereUniqueInput | null;
  readonly disconnect?: ReviewWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WeightWhereInput = {
  readonly AND?: ReadonlyArray<WeightWhereInput | null> | null;
  readonly OR?: ReadonlyArray<WeightWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly weight_in_kg?: Scalars['String'] | null;
  readonly weight_in_kg_not?: Scalars['String'] | null;
  readonly weight_in_kg_contains?: Scalars['String'] | null;
  readonly weight_in_kg_not_contains?: Scalars['String'] | null;
  readonly weight_in_kg_starts_with?: Scalars['String'] | null;
  readonly weight_in_kg_not_starts_with?: Scalars['String'] | null;
  readonly weight_in_kg_ends_with?: Scalars['String'] | null;
  readonly weight_in_kg_not_ends_with?: Scalars['String'] | null;
  readonly weight_in_kg_i?: Scalars['String'] | null;
  readonly weight_in_kg_not_i?: Scalars['String'] | null;
  readonly weight_in_kg_contains_i?: Scalars['String'] | null;
  readonly weight_in_kg_not_contains_i?: Scalars['String'] | null;
  readonly weight_in_kg_starts_with_i?: Scalars['String'] | null;
  readonly weight_in_kg_not_starts_with_i?: Scalars['String'] | null;
  readonly weight_in_kg_ends_with_i?: Scalars['String'] | null;
  readonly weight_in_kg_not_ends_with_i?: Scalars['String'] | null;
  readonly weight_in_kg_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly weight_in_kg_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly size_in_cm?: Scalars['String'] | null;
  readonly size_in_cm_not?: Scalars['String'] | null;
  readonly size_in_cm_contains?: Scalars['String'] | null;
  readonly size_in_cm_not_contains?: Scalars['String'] | null;
  readonly size_in_cm_starts_with?: Scalars['String'] | null;
  readonly size_in_cm_not_starts_with?: Scalars['String'] | null;
  readonly size_in_cm_ends_with?: Scalars['String'] | null;
  readonly size_in_cm_not_ends_with?: Scalars['String'] | null;
  readonly size_in_cm_i?: Scalars['String'] | null;
  readonly size_in_cm_not_i?: Scalars['String'] | null;
  readonly size_in_cm_contains_i?: Scalars['String'] | null;
  readonly size_in_cm_not_contains_i?: Scalars['String'] | null;
  readonly size_in_cm_starts_with_i?: Scalars['String'] | null;
  readonly size_in_cm_not_starts_with_i?: Scalars['String'] | null;
  readonly size_in_cm_ends_with_i?: Scalars['String'] | null;
  readonly size_in_cm_not_ends_with_i?: Scalars['String'] | null;
  readonly size_in_cm_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly size_in_cm_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly bike?: BikeWhereInput | null;
  readonly bike_is_null?: Scalars['Boolean'] | null;
  readonly review?: ReviewWhereInput | null;
  readonly review_is_null?: Scalars['Boolean'] | null;
};

export type WeightWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortWeightsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'weight_in_kg_ASC'
  | 'weight_in_kg_DESC'
  | 'size_in_cm_ASC'
  | 'size_in_cm_DESC'
  | 'bike_ASC'
  | 'bike_DESC'
  | 'review_ASC'
  | 'review_DESC';

export type WeightUpdateInput = {
  readonly weight_in_kg?: Scalars['String'] | null;
  readonly size_in_cm?: Scalars['String'] | null;
  readonly bike?: BikeRelateToOneInput | null;
  readonly review?: ReviewRelateToOneInput | null;
};

export type WeightsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: WeightUpdateInput | null;
};

export type WeightCreateInput = {
  readonly weight_in_kg?: Scalars['String'] | null;
  readonly size_in_cm?: Scalars['String'] | null;
  readonly bike?: BikeRelateToOneInput | null;
  readonly review?: ReviewRelateToOneInput | null;
};

export type WeightsCreateInput = {
  readonly data?: WeightCreateInput | null;
};

export type WeightRelateToOneInput = {
  readonly create?: WeightCreateInput | null;
  readonly connect?: WeightWhereUniqueInput | null;
  readonly disconnect?: WeightWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ReviewWhereInput = {
  readonly AND?: ReadonlyArray<ReviewWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ReviewWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly publication?: PublicationWhereInput | null;
  readonly publication_is_null?: Scalars['Boolean'] | null;
  readonly bike?: BikeWhereInput | null;
  readonly bike_is_null?: Scalars['Boolean'] | null;
  readonly specific_bike_model_version_on_test?: Scalars['String'] | null;
  readonly specific_bike_model_version_on_test_not?: Scalars['String'] | null;
  readonly specific_bike_model_version_on_test_contains?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_not_contains?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_starts_with?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_not_starts_with?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_ends_with?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_not_ends_with?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_i?: Scalars['String'] | null;
  readonly specific_bike_model_version_on_test_not_i?: Scalars['String'] | null;
  readonly specific_bike_model_version_on_test_contains_i?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_not_contains_i?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_starts_with_i?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_not_starts_with_i?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_ends_with_i?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_not_ends_with_i?:
    | Scalars['String']
    | null;
  readonly specific_bike_model_version_on_test_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly specific_bike_model_version_on_test_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly weight?: WeightWhereInput | null;
  readonly weight_is_null?: Scalars['Boolean'] | null;
  readonly headline?: Scalars['String'] | null;
  readonly headline_not?: Scalars['String'] | null;
  readonly headline_contains?: Scalars['String'] | null;
  readonly headline_not_contains?: Scalars['String'] | null;
  readonly headline_starts_with?: Scalars['String'] | null;
  readonly headline_not_starts_with?: Scalars['String'] | null;
  readonly headline_ends_with?: Scalars['String'] | null;
  readonly headline_not_ends_with?: Scalars['String'] | null;
  readonly headline_i?: Scalars['String'] | null;
  readonly headline_not_i?: Scalars['String'] | null;
  readonly headline_contains_i?: Scalars['String'] | null;
  readonly headline_not_contains_i?: Scalars['String'] | null;
  readonly headline_starts_with_i?: Scalars['String'] | null;
  readonly headline_not_starts_with_i?: Scalars['String'] | null;
  readonly headline_ends_with_i?: Scalars['String'] | null;
  readonly headline_not_ends_with_i?: Scalars['String'] | null;
  readonly headline_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly headline_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly summary?: Scalars['String'] | null;
  readonly summary_not?: Scalars['String'] | null;
  readonly summary_contains?: Scalars['String'] | null;
  readonly summary_not_contains?: Scalars['String'] | null;
  readonly summary_starts_with?: Scalars['String'] | null;
  readonly summary_not_starts_with?: Scalars['String'] | null;
  readonly summary_ends_with?: Scalars['String'] | null;
  readonly summary_not_ends_with?: Scalars['String'] | null;
  readonly summary_i?: Scalars['String'] | null;
  readonly summary_not_i?: Scalars['String'] | null;
  readonly summary_contains_i?: Scalars['String'] | null;
  readonly summary_not_contains_i?: Scalars['String'] | null;
  readonly summary_starts_with_i?: Scalars['String'] | null;
  readonly summary_not_starts_with_i?: Scalars['String'] | null;
  readonly summary_ends_with_i?: Scalars['String'] | null;
  readonly summary_not_ends_with_i?: Scalars['String'] | null;
  readonly summary_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly summary_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link?: Scalars['String'] | null;
  readonly link_not?: Scalars['String'] | null;
  readonly link_contains?: Scalars['String'] | null;
  readonly link_not_contains?: Scalars['String'] | null;
  readonly link_starts_with?: Scalars['String'] | null;
  readonly link_not_starts_with?: Scalars['String'] | null;
  readonly link_ends_with?: Scalars['String'] | null;
  readonly link_not_ends_with?: Scalars['String'] | null;
  readonly link_i?: Scalars['String'] | null;
  readonly link_not_i?: Scalars['String'] | null;
  readonly link_contains_i?: Scalars['String'] | null;
  readonly link_not_contains_i?: Scalars['String'] | null;
  readonly link_starts_with_i?: Scalars['String'] | null;
  readonly link_not_starts_with_i?: Scalars['String'] | null;
  readonly link_ends_with_i?: Scalars['String'] | null;
  readonly link_not_ends_with_i?: Scalars['String'] | null;
  readonly link_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly link_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date?: Scalars['String'] | null;
  readonly date_not?: Scalars['String'] | null;
  readonly date_lt?: Scalars['String'] | null;
  readonly date_lte?: Scalars['String'] | null;
  readonly date_gt?: Scalars['String'] | null;
  readonly date_gte?: Scalars['String'] | null;
  readonly date_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly score?: Scalars['String'] | null;
  readonly score_not?: Scalars['String'] | null;
  readonly score_contains?: Scalars['String'] | null;
  readonly score_not_contains?: Scalars['String'] | null;
  readonly score_starts_with?: Scalars['String'] | null;
  readonly score_not_starts_with?: Scalars['String'] | null;
  readonly score_ends_with?: Scalars['String'] | null;
  readonly score_not_ends_with?: Scalars['String'] | null;
  readonly score_i?: Scalars['String'] | null;
  readonly score_not_i?: Scalars['String'] | null;
  readonly score_contains_i?: Scalars['String'] | null;
  readonly score_not_contains_i?: Scalars['String'] | null;
  readonly score_starts_with_i?: Scalars['String'] | null;
  readonly score_not_starts_with_i?: Scalars['String'] | null;
  readonly score_ends_with_i?: Scalars['String'] | null;
  readonly score_not_ends_with_i?: Scalars['String'] | null;
  readonly score_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly score_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author?: Scalars['String'] | null;
  readonly author_not?: Scalars['String'] | null;
  readonly author_contains?: Scalars['String'] | null;
  readonly author_not_contains?: Scalars['String'] | null;
  readonly author_starts_with?: Scalars['String'] | null;
  readonly author_not_starts_with?: Scalars['String'] | null;
  readonly author_ends_with?: Scalars['String'] | null;
  readonly author_not_ends_with?: Scalars['String'] | null;
  readonly author_i?: Scalars['String'] | null;
  readonly author_not_i?: Scalars['String'] | null;
  readonly author_contains_i?: Scalars['String'] | null;
  readonly author_not_contains_i?: Scalars['String'] | null;
  readonly author_starts_with_i?: Scalars['String'] | null;
  readonly author_not_starts_with_i?: Scalars['String'] | null;
  readonly author_ends_with_i?: Scalars['String'] | null;
  readonly author_not_ends_with_i?: Scalars['String'] | null;
  readonly author_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ReviewWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortReviewsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'publication_ASC'
  | 'publication_DESC'
  | 'bike_ASC'
  | 'bike_DESC'
  | 'specific_bike_model_version_on_test_ASC'
  | 'specific_bike_model_version_on_test_DESC'
  | 'weight_ASC'
  | 'weight_DESC'
  | 'headline_ASC'
  | 'headline_DESC'
  | 'summary_ASC'
  | 'summary_DESC'
  | 'link_ASC'
  | 'link_DESC'
  | 'date_ASC'
  | 'date_DESC'
  | 'score_ASC'
  | 'score_DESC'
  | 'author_ASC'
  | 'author_DESC';

export type ReviewUpdateInput = {
  readonly publication?: PublicationRelateToOneInput | null;
  readonly bike?: BikeRelateToOneInput | null;
  readonly specific_bike_model_version_on_test?: Scalars['String'] | null;
  readonly weight?: WeightRelateToOneInput | null;
  readonly headline?: Scalars['String'] | null;
  readonly summary?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
  readonly date?: Scalars['String'] | null;
  readonly score?: Scalars['String'] | null;
  readonly author?: Scalars['String'] | null;
};

export type ReviewsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ReviewUpdateInput | null;
};

export type ReviewCreateInput = {
  readonly publication?: PublicationRelateToOneInput | null;
  readonly bike?: BikeRelateToOneInput | null;
  readonly specific_bike_model_version_on_test?: Scalars['String'] | null;
  readonly weight?: WeightRelateToOneInput | null;
  readonly headline?: Scalars['String'] | null;
  readonly summary?: Scalars['String'] | null;
  readonly link?: Scalars['String'] | null;
  readonly date?: Scalars['String'] | null;
  readonly score?: Scalars['String'] | null;
  readonly author?: Scalars['String'] | null;
};

export type ReviewsCreateInput = {
  readonly data?: ReviewCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type BikeListTypeInfo = {
  key: 'Bike';
  fields:
    | 'id'
    | 'name'
    | 'launchDate'
    | 'score'
    | 'model_year'
    | 'drive_train_type'
    | 'includes_powermeter'
    | 'description'
    | 'photo'
    | 'weight'
    | 'review'
    | 'brakeType'
    | 'price';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly launchDate?: Date | null;
    readonly score?: number | null;
    readonly model_year?: number | null;
    readonly drive_train_type?: string | null;
    readonly includes_powermeter?: boolean | null;
    readonly description?: string | null;
    readonly photo?: string | null;
    readonly weight?: string | null;
    readonly review?: string | null;
    readonly brakeType?: string | null;
    readonly price?: number | null;
  };
  inputs: {
    where: BikeWhereInput;
    create: BikeCreateInput;
    update: BikeUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BikeWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBikesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BikeListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BikeListTypeInfo,
    BikeListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BikeListTypeInfo,
  BikeListTypeInfo['fields']
>;

export type BikeImageListTypeInfo = {
  key: 'BikeImage';
  fields: 'id' | 'image' | 'altText' | 'bike';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly bike?: string | null;
  };
  inputs: {
    where: BikeImageWhereInput;
    create: BikeImageCreateInput;
    update: BikeImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BikeImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBikeImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BikeImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BikeImageListTypeInfo,
    BikeImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BikeImageListTypeInfo,
  BikeImageListTypeInfo['fields']
>;

export type PublicationListTypeInfo = {
  key: 'Publication';
  fields: 'id' | 'name' | 'photo' | 'review';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly photo?: string | null;
    readonly review?: string | null;
  };
  inputs: {
    where: PublicationWhereInput;
    create: PublicationCreateInput;
    update: PublicationUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PublicationWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPublicationsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PublicationListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PublicationListTypeInfo,
    PublicationListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PublicationListTypeInfo,
  PublicationListTypeInfo['fields']
>;

export type PublicationImageListTypeInfo = {
  key: 'PublicationImage';
  fields: 'id' | 'image' | 'altText' | 'publication';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly publication?: string | null;
  };
  inputs: {
    where: PublicationImageWhereInput;
    create: PublicationImageCreateInput;
    update: PublicationImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PublicationImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPublicationImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PublicationImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PublicationImageListTypeInfo,
    PublicationImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PublicationImageListTypeInfo,
  PublicationImageListTypeInfo['fields']
>;

export type WeightListTypeInfo = {
  key: 'Weight';
  fields: 'id' | 'weight_in_kg' | 'size_in_cm' | 'bike' | 'review';
  backing: {
    readonly id: string;
    readonly weight_in_kg?: string | null;
    readonly size_in_cm?: string | null;
    readonly bike?: string | null;
    readonly review?: string | null;
  };
  inputs: {
    where: WeightWhereInput;
    create: WeightCreateInput;
    update: WeightUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: WeightWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortWeightsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type WeightListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    WeightListTypeInfo,
    WeightListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  WeightListTypeInfo,
  WeightListTypeInfo['fields']
>;

export type ReviewListTypeInfo = {
  key: 'Review';
  fields:
    | 'id'
    | 'publication'
    | 'bike'
    | 'specific_bike_model_version_on_test'
    | 'weight'
    | 'headline'
    | 'summary'
    | 'link'
    | 'date'
    | 'score'
    | 'author';
  backing: {
    readonly id: string;
    readonly publication?: string | null;
    readonly bike?: string | null;
    readonly specific_bike_model_version_on_test?: string | null;
    readonly weight?: string | null;
    readonly headline?: string | null;
    readonly summary?: string | null;
    readonly link?: string | null;
    readonly date?: Date | null;
    readonly score?: string | null;
    readonly author?: string | null;
  };
  inputs: {
    where: ReviewWhereInput;
    create: ReviewCreateInput;
    update: ReviewUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ReviewWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortReviewsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ReviewListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ReviewListTypeInfo,
    ReviewListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ReviewListTypeInfo,
  ReviewListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Bike: BikeListTypeInfo;
  readonly BikeImage: BikeImageListTypeInfo;
  readonly Publication: PublicationListTypeInfo;
  readonly PublicationImage: PublicationImageListTypeInfo;
  readonly Weight: WeightListTypeInfo;
  readonly Review: ReviewListTypeInfo;
};
