---
title: Μελλοντική προστασία Ethereum
description: Αυτές οι αναβαθμίσεις ενισχύουν το Ethereum ως ένα βασικό επίπεδο ανθεκτικότητας και αποκέντρωσης για το μέλλον, ό,τι και αν γίνει.
lang: el
image: /images/roadmap/roadmap-future.png
alt: "Οδικός χάρτης"
template: roadmap
---

Ορισμένα τμήματα του οδικού χάρτη δεν απαιτούνται απαραίτητα για την επεκτασιμότητα ή την ασφάλεια του Ethereum βραχυπρόθεσμα, αλλά ρυθμίζουν το Ethereum για σταθερότητα και αξιοπιστία στο μέλλον.

## Κβαντική αντίσταση {#quantum-resistance}

Μέρος της [κρυπτογραφίας](/glossary/#cryptography) που ασφαλίζει το σημερινό Ethereum θα τεθεί σε κίνδυνο όταν ο κβαντικός υπολογιστής γίνει πραγματικότητα. Αν και οι κβαντικοί υπολογιστές απέχουν πιθανώς δεκαετίες από το να αποτελέσουν μια πραγματική απειλή για τη σύγχρονη κρυπτογραφία, το Ethereum κατασκευάζεται για να είναι ασφαλές για τους επόμενους αιώνες. Αυτό καθιστά τη μετάβαση στην [κβαντική ανθεκτικότητα του Ethereum](https://consensys.net/blog/developers/how-will-quantum-supremacy-affect-blockchain/) το συντομότερο δυνατό.

Η πρόκληση που αντιμετωπίζουν οι προγραμματιστές του Ethereum είναι ότι το τρέχον πρωτόκολλο [απόδειξης συμμετοχής](/glossary/#pos) βασίζεται σε ένα πολύ αποτελεσματικό σχήμα υπογραφών γνωστό ως BLS για τη συγκέντρωση ψήφων σε έγκυρα [μπλοκ](/glossary/#block). Αυτό το σχήμα υπογραφών έχει σπάσει από τους κβαντικούς υπολογιστές, αλλά οι εναλλακτικές λύσεις που είναι ανθεκτικές σε κβαντικά δεν είναι τόσο αποτελεσματικές.

Τα [σχήματα δέσμευσης «KZG»](/roadmap/danksharding/#what-is-kzg) που χρησιμοποιούνται σε πολλά σημεία στο Ethereum για τη δημιουργία κρυπτογραφικών μυστικών είναι γνωστό ότι είναι κβαντικά ευάλωτα. Επί του παρόντος, αυτό παρακάμπτεται με τη χρήση «αξιόπιστων ρυθμίσεων» όπου πολλοί χρήστες δημιουργούν τυχαίες καταστάσεις που δεν μπορούν να δημιουργηθούν αντίστροφα από έναν κβαντικό υπολογιστή. Ωστόσο, η ιδανική λύση θα ήταν απλώς η ενσωμάτωση της κβαντικής ασφαλούς κρυπτογραφίας. Υπάρχουν δύο κορυφαίες προσεγγίσεις που θα μπορούσαν να γίνουν αποτελεσματικές αντικαταστάσεις για το σχήμα BLS: [το βασισμένο σε STARK](https://hackmd.io/@vbuterin/stark_aggregation) και [το βασισμένο σε πλέγμα](https://medium.com/asecuritysite-when-bob-met-alice/so-what-is-lattice-encryption-326ac66e3175) υπογραφή. **Αυτά είναι ακόμα υπό έρευνα και δημιουργία πρωτότυπου.**

<ButtonLink variant="outline-color" to="/roadmap/danksharding#what-is-kzg"> Διαβάστε για το KZG και τις αξιόπιστες ρυθμίσεις</ButtonLink>

## Πιο απλό και αποτελεσματικό Ethereum {#simpler-more-efficient-ethereum}

Η πολυπλοκότητα δημιουργεί ευκαιρίες για σφάλματα ή τρωτά σημεία που μπορούν να εκμεταλλευτούν οι κακόβουλοι. Ως εκ τούτου, μέρος του οδικού χάρτη είναι η απλοποίηση του Ethereum και η κατάργηση του κώδικα που έχει κολλήσει μέσα από διάφορες αναβαθμίσεις αλλά δε χρειάζονται πλέον ή μπορούν να βελτιωθούν. Μια πιο λιτή, απλούστερη βάση κώδικα είναι ευκολότερο για τους προγραμματιστές να διατηρούν και να συλλογίζονται.

Υπάρχουν πολλές ενημερώσεις που θα γίνουν στην [Εικονική Μηχανή Ethereum (EVM)](/developers/docs/evm) για να γίνει απλούστερη και πιο αποτελεσματική. Σε αυτά περιλαμβάνονται η [κατάργηση του κωδικού λειτουργίας SELFDESTRUCT](https://hackmd.io/@vbuterin/selfdestruct) - μια σπάνια χρησιμοποιούμενη εντολή που δε χρειάζεται πλέον και σε ορισμένες περιπτώσεις μπορεί να είναι επικίνδυνη για χρήση, ειδικά όταν συνδυάζεται με άλλες μελλοντικές αναβαθμίσεις στο μοντέλο αποθήκευσης του Ethereum. Οι [εφαρμογές πελάτη Ethereum](/glossary/#consensus-client) υποστηρίζουν επίσης ορισμένους παλιούς τύπους συναλλαγών που μπορούν πλέον να αφαιρεθούν εντελώς. Ο τρόπος υπολογισμού των [κρατήσεων](/glossary/#gas) μπορεί επίσης να βελτιωθεί και να εισαχθούν πιο αποτελεσματικές μέθοδοι για την αριθμητική υποστήριξη ορισμένων κρυπτογραφικών λειτουργιών.

Ομοίως, υπάρχουν ενημερώσεις που μπορούν να γίνουν σε άλλα μέρη των σημερινών εφαρμογών πελάτη Ethereum. Ένα παράδειγμα είναι ότι οι τρέχοντες εφαρμογές πελάτη εκτέλεσης και συναίνεσης χρησιμοποιούν διαφορετικό τύπο συμπίεσης δεδομένων. Θα είναι πολύ πιο εύκολο και πιο διαισθητικό να μοιράζεστε δεδομένα μεταξύ των πελατών όταν το σχήμα συμπίεσης είναι ενοποιημένο σε ολόκληρο το δίκτυο.

## Τρέχουσα πρόοδος {#current-progress}

Οι περισσότερες από τις αναβαθμίσεις που απαιτούνται για το μελλοντικό Ethereum βρίσκονται ακόμα σε **ερευνητικό στάδιο και ενδέχεται να απέχουν αρκετά χρόνια** από την εφαρμογή τους. Αναβαθμίσεις όπως η κατάργηση της ΑΥΤΟΚΑΤΑΣΤΡΟΦΗΣ και η εναρμόνιση του σχήματος συμπίεσης που χρησιμοποιείται στους πελάτες εκτέλεσης και συναίνεσης είναι πιθανό να έρθουν νωρίτερα από την κβαντική κρυπτογραφία.

**Περισσότερες πληροφορίες**

- [Κρατήσεις (Gas)](/developers/docs/gas)
- [EVM](/developers/docs/evm)
- [Δομές δεδομένων](/developers/docs/data-structures-and-encoding)
