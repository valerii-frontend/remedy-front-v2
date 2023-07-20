/**
 * @generated SignedSource<<f75944a4b701cc008b5bb373f0ccb3d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "shell-scripts"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "egorvinogradov"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "repository(name:\"shell-scripts\",owner:\"egorvinogradov\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"shell-scripts\",owner:\"egorvinogradov\")"
      }
    ]
  },
  "params": {
    "cacheID": "d6cc0f8a051c42b29889f09589562863",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryInfoQuery",
    "operationKind": "query",
    "text": "query AppRepositoryInfoQuery {\n  repository(owner: \"egorvinogradov\", name: \"shell-scripts\") {\n    name\n    description\n    id\n  }\n}\n"
  }
};
})();

node.hash = "0b4a6f8765ea28d8da2511b3cc330e06";

module.exports = node;
