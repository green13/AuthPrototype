var db = require('./../db/index');


/**
 * ����������� ��� �������.
 * ������ �������� � ����� ������ �� �����������, ������� ����������, ������ ���������� �������.
 * @param clientId
 * @param clientSecret
 * @param accessToken
 * @param done
 */
module.exports.check = function (clientId, clientSecret, accessToken, done) {
    db.clients.find(clientId, function (err, client) {
        if (err) {
            return done(err);
        }
        if (!client) {
            return done(null, false);
        }
        if (client.secret !== clientSecret) {
            return done(null, false);
        }


        db.accessTokens.find(accessToken, function (err, token) {
            if (err) {
                return done(err);
            }

            if (!token || token.clientId) {
                return done(null, false);
            }

            if (new Date() > token.expirationDate) {
                db.accessTokens.delete(accessToken, function (err) {
                    return done(err);
                });
            } else {
                if (!token.userId) { // ������������ ������� �.�. ���� userId ������������
                    return done(null, false);
                }

                db.users.find(token.userId, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false);
                    }
                    // to keep this example simple, restricted scopes are not implemented,
                    // and this is just for illustrative purposes
                    var info = {scope: '*'};
                    return done(null, user);
                });
            }
        });
    });
};